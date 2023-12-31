import React from "react";
import { Dimensions, Image, Text, StyleSheet, View} from "react-native";
import logo from "../../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
    return(
<>
<Image style={estilos.logo} source={logo}></Image>
<Text style={estilos.titulo}>Detalhes do Carrinho</Text>
<View>
    <Text style={estilos.nome}>Produtos de Beleza</Text>



</View>

</>
    );
}

const estilos = StyleSheet.create({
    logo: {
        width: "100%",
        height: (500 / 500) * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: "white",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        padding: 16
      },
      nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
      }
})