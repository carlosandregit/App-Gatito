import React from "react";
import { TextInput } from "react-native";

export default function ComponenteInteiro({ valor, acao }) {
  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/);

    if(!verificaInteiro) return;

    const removeZerosquerda = novoValor.replace(/^(0)(.*)/,'$2');
    acaoRetorno(removeZerosquerda);
  };

  const valorText = String(valor);
  return (
    <TextInput
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(novoValor) => {
        atualiza(novoValor, acaoRetorno);
      }}
      value={valorText}
    />
  );
}
