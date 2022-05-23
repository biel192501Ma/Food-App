const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router("./database.json");
const userdb = JSON.parse(fs.readFileSync("./users.json", "UTF-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "098557w@osdosos.hjdishyddshsdhsQ.suaisuas";

const expiresIn = "1h";

// Criação da expiração do token a cada 1 hora.
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verifcação do token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Verficação se o usuário é existente
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

// Registrando novo usuário
server.post("/api/auth/register", (req, res) => {
  console.log("Registro usuário");
  console.log(req.body);
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = "Já existe esse e-mail e senha";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Pegando dados do usuário atual
    var data = JSON.parse(data.toString());

    // obtendo o id do ultimo usuário
    var last_item_id = data.users[data.users.length - 1].id;

    // adicionando novo usuário
    data.users.push({ id: last_item_id + 1, email: email, password: password }); //adiciona poucos dados
    var writeData = fs.writeFile(
      "./users.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });

  // Criando o token para o novo usuário
  const access_token = createToken({ email, password });
  console.log("Token de Acesso:" + access_token);
  res.status(200).json({ access_token });
});

// Fazendo login
server.post("/api/auth/login", (req, res) => {
  console.log("Funcionou?");
  console.log(req.body);
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = "E-mail ou senha errado";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email, password });
  console.log("Token de Acesso" + access_token);
  res.status(200).json({ access_token });
});

//
server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Erro no formato de autorização";
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(" ")[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = "Token de acesso não foi informado";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "O token de acesso foi expirado :/";
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(8000, () => {
  console.log("Servidor Rodando :)");
});
