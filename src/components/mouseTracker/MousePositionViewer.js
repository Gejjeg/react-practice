import React from "react";
import { WithMousePosition } from "./WithMousePosition";

export class MousePositionViewer extends React.Component {
    render() {
        const [x, y] = this.props.position

        return (
            <div>
                <div style={{height: 300, width: 300, backgroundColor: "azure"}}></div>
                Current position: {x}, {y}
            </div>
        )
    }
}

export default WithMousePosition(MousePositionViewer)
