import React from "react";

import { SafeAreaView, StatusBar, Text, FlatList } from "react-native";
import Item from "./Item";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 50.50,
    descricao: "Não dê banho no teu gato, as se precisar nós damos.",
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 90.9,
    descricao: "Seu gato só tem uma vacina? Ele precisa de mais uma.",
  },
  {
    id: 3,
    nome: "Corte de unhmas",
    preco: 20.1,
    descricao: "Seu gato precisar ficar com unhmuas pequenas.",
  },
  {
    id: 4,
    nome: "Vacina da raiva",
    preco: 100.9,
    descricao: "Diga não a raiva",
  }
];

export default function Servicos() {
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <Text>Serviços!</Text>
      <FlatList
        data={servicos} 
        removeClippedSubviews={false}           
         renderItem={({item}) => <Item {...item}/>} 
        keyExtractor={({id}) => String(id)}
      />
    </SafeAreaView>
  );
}
