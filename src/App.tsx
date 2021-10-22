import React, {useEffect, useState} from 'react';
import './App.css';
import {TypescriptRequestClassComponent} from "./class-components/TypescriptRequestClassComponent";
import {MyCustomInput} from "./class-components/MyCustomInput";
import {MyCustomInputWithFunction} from "./function-components/MyCustomInputWithFunction";
import {RequestFunctionComponent} from "./function-components/RequestFunctionComponent";

function App() {

    const [miTexto, setMiTexto] = useState('');

    useEffect(() => {
        document.title = miTexto;
    }, [miTexto])


    const buttonClickedCallback = () => {
        alert('Hicieron click en el botón desde el componente hijo!')
    }

    return (
        <>
            <div className="App">

                <h1>Class components </h1>
                <MyCustomInput value={miTexto} valueChanged={setMiTexto}/>

                <TypescriptRequestClassComponent cantidad={0} onButtonClicked={buttonClickedCallback}/>

                <hr/>
                <h1>Function components</h1>

                <MyCustomInputWithFunction model={miTexto} modelChanged={setMiTexto}/>
                <RequestFunctionComponent initialClickCount={1}/>

            </div>
        </>
    );
}

export default App;
