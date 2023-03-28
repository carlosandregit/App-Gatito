import React, { useState } from "react";
// import { Button } from "react-native";
import {View, Text, Button } from "react-native";
import estilo from "./estilo";
import ComponenteInteiro from "../../../componentes/CampoInteiro";
export default function Item({nome, preco, descricao}){
    const [quantidade, setQuantidade] =  useState(1);
    return <>
    <View style={estilo.informacao}>
    <Text style={estilo.nome}>{ nome }</Text>
    <Text style={estilo.descricao}>{ descricao }</Text>
    <Text style={estilo.preco}>{ preco }</Text>    
    </View>
    <View style={estilo.carrinho}>
        <View>
            <View style={estilo.valor}>
                <Text style={estilo.descricao}>Quantidade:</Text>
                <ComponenteInteiro valor={quantidade} acao={setQuantidade}/>
            </View>
            <View style={estilo.valor}>
                <Text style={estilo.descricao}>Preço:</Text>
                <Text style={estilo.preco}>0</Text>               
            </View>
            
        </View>
        <Button title="Adicionar"></Button>
    </View>
    <View style={estilo.divisor}/>
    </>;
}