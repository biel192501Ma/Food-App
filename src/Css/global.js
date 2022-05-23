import react from "react";

import styled from "styled-components/native";
import theme from "../Assets/theme.json";

export const Box = styled.View`
  flex: ${({ fluid }) => (fluid ? 1 : "none")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  background-color: ${({ color }) => (color ? theme.Colors[color] : "")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  padding: ${({ haspadding }) => (haspadding ? "10px  " : "0px")};
  margin-left: ${({ left }) => (left ? left + "%" : "0")};
  margin-right: ${({ right }) => (right ? right + "%" : "0")};
  margin-top: ${({ top }) => (top ? top + "%" : "0")};
  margin-bottom: ${({ bottom }) => (bottom ? bottom + "%" : "0")};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop + "%" : "0")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft + "%" : "0")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "flex-start")};
  border-radius: ${({ radius }) => (radius ? radius + "px" : "0")};
`;

export const Space = styled.View`
  height: ${({ size }) => (size ? size : "10px")};
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${({ size }) => (size ? size + "px" : "15px")};
  font-weight: ${({ bold, regular }) =>
    bold ? "900" : regular ? "300" : "500"};
  color: ${({ color }) => (color ? theme.Colors[color] : "#000")};
  margin-top: ${({ top }) => (top ? top + "%" : "0")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft + "%" : "0")};
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};

`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  background-color: ${({ color }) =>
    color ? theme.Colors[color] :"white"};
  border-radius: 5px;
  border-Width: 1px;
 border-Color: ${({ color }) =>
    color ? theme.Colors[color] :theme.Colors.graydark};
  margin-top: ${({ top }) => (top ? top + "%" : "0")};
  margin-bottom: ${({ bottom }) => (bottom ? bottom + "%" : "0")};
  margin-left: ${({ left }) => (left ? left + "%" : "0")};
  padding: 10px;
  color: ${({ textcolor }) =>
    textcolor ? theme.Colors[textcolor] : theme.Colors.dark};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => (color ? theme.Colors[color] : "")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};

  margin-left: ${({ left }) => (left ? left + "%" : "0")};
  margin-right: ${({ right }) => (right ? right + "%" : "0")};
  margin-top: ${({ top }) => (top ? top + "%" : "0")};
  margin-bottom: ${({ bottom }) => (bottom ? bottom + "%" : "0")};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop + "%" : "0")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft + "%" : "0")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  border-radius: ${({ radius }) => (radius ? radius + "px" : "0")};
`;

export const ScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: true,
  showsVerticalScrollIndicator: true,
})`
  flex: ${({ fluid }) => (fluid ? 1 : "none")};
  background-color: ${({ color }) => (color ? theme.Colors[color] : "")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  background-color: ${({ color }) => (color ? theme.Colors[color] : "")};
`;

//Pertencente a tela de login
