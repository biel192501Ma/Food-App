import react from "react";

import styled from "styled-components/native";
import theme from "../util/theme.json";
import fonts from "../util/fonts";




export const Box = styled.View`
  flex: ${({ fluid }) => (fluid ? 1 : "none")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  background-color: ${({ color }) => (color ? theme.colors[color] : "")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  
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
  color: ${({ color }) => (color ? theme.colors[color] : "#000")};
  margin-top: ${({ top }) => (top ? top + "%" : "0")};
  margin-left: ${({ left }) => (left ? left + "%" : "0")};
  padding-right: ${({ paddingRight }) => (paddingRight ? paddingRight + "%" : "0")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft + "%" : "0")};
  opacity: ${({ opacity }) => (opacity ? 0.5 : 1)};
  font-family: ${({font}) => font ? font : fonts.primary};
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  background-color: ${({ color }) => (color ? theme.colors[color] : "white")};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${({ color }) =>
    color ? theme.colors[color] : theme.colors.graydark};
  margin-top: ${({ top }) => (top ? top + "%" : "0")};
  margin-bottom: ${({ bottom }) => (bottom ? bottom + "%" : "0")};
  margin-left: ${({ left }) => (left ? left + "%" : "0")};
  padding: 10px;
  color: ${({ textcolor }) =>
    textcolor ? theme.colors[textcolor] : theme.colors.dark};
  font-family: ${fonts.primary};
  
  `;
  

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => (color ? theme.colors[color] : "")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
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
  background-color: ${({ color }) => (color ? theme.colors[color] : "")};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  background-color: ${({ color }) => (color ? theme.colors[color] : "")};
`;

export const TextValidation = styled.Text`
  color: ${({ color }) => (color ? theme.colors[color] : "")};
  font-family: ${fonts.primary};
  font-size: ${({ size }) => (size ? size + "px" : "8px")};
  margin-left: ${({ left }) => (left ? left + "%" : "0")};
`;
