import React from "react";
import axios from "axios";

interface PropsMyTypescriptComponent {
    cantidad: number,
    onButtonClicked?: Function
}

interface StateMyTypescriptComponent {
    cantidad: number,
    enojado: boolean,
    empleado: any,
    error?: any,
    cargando: boolean
}

export class MyTypescriptComponent extends React.Component<PropsMyTypescriptComponent, StateMyTypescriptComponent> {

    state: StateMyTypescriptComponent = {
        cantidad: 0,
        enojado: false,
        empleado: '',
        cargando: false

    }
    props: PropsMyTypescriptComponent = {
        cantidad: 0,
        onButtonClicked: () => null
    }


    constructor(props: PropsMyTypescriptComponent, context: any) {
        super(props, context);
        this.props = props;
    }

    buttonClick() {
        this.setState({cargando: true, error: undefined});

        if (!this.state.cantidad) this.setState({cantidad: this.props.cantidad});

        this.setState({cantidad: this.state.cantidad + 1});

        this.setState({enojado: !this.state.enojado});
        if (this.props.onButtonClicked) this.props.onButtonClicked();

        this.loadEmployees().then()
    }

    public async loadEmployees() {
        try {
            this.setState({cargando: true})
            const response = await axios.get<any>('https://dummy.restapiexample.com/api/v1/employee/1');

            this.setState({empleado: JSON.stringify(response), error: false})
        } catch (error: any) {
            this.setState({error});
        } finally {
            this.setState({cargando: false})
        }
    }


    componentDidMount() {
        this.loadEmployees().then();
    }

    //#region Templates
    public errorTemplate(): JSX.Element {
        return (
            <>
                <span>Se me rompió</span>
                <button onClick={() => this.buttonClick()}>Reintentar.</button>
            </>
        );
    }

    public loadingTemplate(): JSX.Element {
        return (
            <>
                <span>Estoy cargando c:</span>
            </>
        )
    }

    public defaultTemplate(): JSX.Element {
        let estoyEnojado: JSX.Element = (<></>);
        if (this.state.enojado) estoyEnojado = (<span>Estoy enojado!</span>);

        return (
            <>
                <h1>Cantidad de clicks: {this.state.cantidad}</h1>
                <button onClick={() => this.buttonClick()}>Me hiciste click {this.state.cantidad} veces.</button>

                {estoyEnojado}

                {this.state.empleado}
            </>
        );
    }

    //#endregion

    render() {

        if (this.state.error) return this.errorTemplate();
        if (this.state.cargando) return this.loadingTemplate();

        return this.defaultTemplate();
    }
}
