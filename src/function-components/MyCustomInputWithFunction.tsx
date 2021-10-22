import React, {useEffect, useState} from "react";

interface Props {
    model: string,
    modelChanged: IValue
}

interface IValue {
    (text: string): void
}

export function MyCustomInputWithFunction(props: Props) {

    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(props.model)
    }, [props.model])
    
    const inputValueChanged = (newValue: string) => {
        setValue(newValue);
        props.modelChanged(newValue);
    }

    return (
        <>
            <label>Componente funcion</label>
            <input type="text" value={value} onChange={(event) => inputValueChanged(event.target.value)}/>
        </>
    )
}
