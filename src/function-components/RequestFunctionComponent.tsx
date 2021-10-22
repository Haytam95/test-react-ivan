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

export function RequestFunctionComponent(props: Props) {

    const [clickCount, setClickCount] = useState(props.initialClickCount || 0);
    const [requestValue, setRequestValue] = useState('');

    const buttonClicked = () => {
        setClickCount(clickCount + 1);
        requestEmployee().then((value: string) => {
            setRequestValue(value);
        })
    }

    useEffect(() => {
        requestEmployee().then((value: string) => {
            setRequestValue(value);
        })
    }, [])

    return (
        <>
            <button onClick={buttonClicked}>Clickeaste {clickCount} veces.
            </button>

            <h3>Resultado de la respuesta:</h3>

            <p>{requestValue}</p>
        </>
    )

}
