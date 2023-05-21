import React from "react";

export class MyForm extends React.Component{
    state = {
        username: "",
        password: "",
        remember: false
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === "checkbox" ? checked : value,
        })
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    handleReset = () => {
        this.setState({
            username: "",
            password: "",
            remember: false
        })
    }

    handlePrefillForm = () => {

        this.setState({
            username: "Bassey",
            password: "goeke",
            remember: true,
        })
    }

    render() {
        return (
            <div>
                <h1>My Form</h1>
                <div>
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.handlePrefillForm}>Prefill Form</button>
                </div>
                <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="password"
                />
                <input
                    name="remember"
                    checked={this.state.remember}
                    onChange={this.handleInputChange}
                    type="checkbox"
                />
            </div>
        )
    }
}
