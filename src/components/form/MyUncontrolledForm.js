import React, { createRef } from "react";

export class MyUncontrolledForm extends React.Component {
    _formRef = createRef()

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    handleFormPrefill = (event) => {
        this._formRef.current.elements.username.value = "Billy"
        this._formRef.current.elements.password.value = "1212"
        this._formRef.current.elements.remember.checked = true
    }

    render() {
        return (
            <div>
                <h3>My Uncontrolled Form</h3>

                <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                    <input name="remember" defaultValue="Jimmy" />
                    <input name="password" type="password" />
                    <input name="remember" type="checkbox" />

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                    <button type="button" onClick={this.handleFormPrefill}>Prefill Form</button>
                </form>
            </div>
        )
    }
}
