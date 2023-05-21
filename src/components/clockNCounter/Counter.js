import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    handleCounterIncrement = (event) => {
        console.log(event);
        this.setState(state => {
            return {
                count: state.count + this.props.incrementBy,
            }
        })
    }

    render() {
        return (
            <div>
                <h3 style={{
                        color: this.state.count < 5 ? "red" : "green",
                    }}
                >
                    Count: {this.state.count}
                </h3>
                <button onClick={this.handleCounterIncrement}>Increment</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementBy: 1
}
