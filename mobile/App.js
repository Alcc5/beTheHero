import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';

import Routes from './src/routes';

//ReactJS:      

//Tags têm semântica, ou resultado significativo (texto em negrito, texto em parágrafo, etc) ex: <div> <span> <p> <h1>
//Estilização com ClassName, id, etc

//React Native: 

//Tags NÃO têm semântica (texto, container, etx) ex: <View> <Text>
//Estilização feita diretamente na tag através de um objeto ou atavés do StyleSheet
//Todos os elementos tem display:flex por padrão
//Propriedades do CSS que eram separadas por hífen viram Camel Case, ex: background-color => backgroundColor
//Não existe herança de estilos

export default function App() {
  return (
    <Routes />
  );
}

