import React from "react";

export class Hello extends React.Component {
    render() {
        return (
            <div>
                {!!this.props.renderGreeting && <h1>Hello, World!</h1>}
                <p>What a beautiful day!</p>
            </div>
        )
    }
}
