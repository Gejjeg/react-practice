import React from "react";

export class MouseTracker extends React.Component {
    state = {
        position: [0, 0]
    }

    handleMouseMove = (event) => {
        const x = event.clientX
        const y = event.clientY

        this.setState({
            position: [x, y]
        })
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state.position)}
            </div>
        )
    }
}
