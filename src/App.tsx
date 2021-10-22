import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyTypescriptComponent} from "./MyLittleComponent";
import {MyCustomInput} from "./MyCustomInput";

let miTexto = '';


function cargar() {
    alert('Me hicieron click desde el componente hijo!!!');
}
function cambiaronTexto(texto: string) {
    miTexto = texto
    alert('Me cambiaron. Nuevo texto: ' + miTexto)
}
function App() {


    return (
        <>
            <div className="App">

                <MyCustomInput value={miTexto} valueChanged={cambiaronTexto}/>

                <MyTypescriptComponent cantidad={0} onButtonClicked={cargar}/>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        </>
    );
}

export default App;
