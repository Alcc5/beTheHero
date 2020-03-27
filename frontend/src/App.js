import React from 'react';

import './global.css'

import Routes from './routes'

//Conceitos do React

//Componente:     Função que retorna HTML
//JSX:            JavaScript XML
//Propriedade:    Propriedade React = Atributos HTML, ex: <Header title="Semana OmniStack" />
//Estado:         O para pegar o estado das variáveis React: {useState}; retorna Array[valor da variavel, funcaoDeAtualizacao]
//Imutabilidade:  Por questão de performance, é impossível manipular diretamente o valor de uma variável

// import Header from './Header'

// function App() {
//   const [counter, setCounter] = useState(0);

//   function increment(){
//     setCounter(counter + 1)
//   }

//   return (
//     <div>
//       <Header>Contador: {counter}</Header>
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   );
// }

function App() {
    return (
        <Routes></Routes>
    )
}

export default App;