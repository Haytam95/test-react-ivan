import React from "react";

interface IValue {
    (text: string): void
}

interface Props {
    value: string,
    valueChanged: IValue
}

interface State {
    model: string
}

export class MyCustomInput extends React.Component<Props, State> {

    props: Props = {
        value: '',
        valueChanged: () => null
    }

    state: State = {
        model: ''
    }


    constructor(props: Props, context: any) {
        super(props, context);
        this.props = props;
    }

    componentDidMount() {
        this.setState({model: this.props.value});
    }

    private valueChanged(newValue: string) {
        this.setState({model: newValue});
        this.props.valueChanged(newValue);
    }

    render() {
        return (
            <>
                <label>Componente clase</label>
                <input type="text" value={this.state.model} onChange={(event) => this.valueChanged(event.target.value)} />
            </>
        );
    }
}
