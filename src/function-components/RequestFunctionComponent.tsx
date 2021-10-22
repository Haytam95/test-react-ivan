import {useEffect, useState} from "react";
import axios from "axios";

interface Props {
    initialClickCount?: number
}

async function requestEmployee(): Promise<string> {
    try {
        const request = await axios.get('https://dummy.restapiexample.com/api/v1/employee/1');
        return JSON.stringify(request.data);
    } catch (e) {
        return JSON.stringify(e);
    }
}

export function RequestFunctionComponent(props: Props): JSX.Element {

    const [clickCount, setClickCount] = useState(props.initialClickCount || 0);
    const [requestValue, setRequestValue] = useState('');
    const [cargando, setCargando] = useState(false);

    const buttonClicked = () => {
        setClickCount(clickCount + 1);
        makeHttpRequest();
    }

    const makeHttpRequest = () => {
        setCargando(true)
        requestEmployee().then((value: string) => {
            setRequestValue(value);
        }).finally(() => setCargando(false));
    }

    useEffect(() => {
        makeHttpRequest();
    }, [])

    if (cargando) {
        return (
            <>
                <Cargando/>
            </>
        )
    } else {
        return (
            <>
                <button onClick={buttonClicked}>Clickeaste {clickCount} veces.
                </button>

                <h3>Resultado de la respuesta:</h3>

                <p>{requestValue}</p>
            </>
        )
    }

}

function Cargando(): JSX.Element {
    return (
        <>
            <p>Estoy cargando!</p>
        </>
    )
}
