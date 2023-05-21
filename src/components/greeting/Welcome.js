import React, { useEffect, useRef, useState } from "react";
import { DisplayLaguage } from "../contextAPI/DisplayLanguage";
import { Link, useNavigate, useParams } from "react-router-dom";

export function Welcome() {
    // const [name, setName] = useState("world")
    // const inputRef = useRef()
    const navigate = useNavigate()
    const { name = "World" } = useParams()

    // useEffect(() =>{
    //     inputRef.current.focus()
    // }, [])

    // const handleName = (event) => {
    //     setName(event.target.value)
    // }

    const handleLoginButton = () => {
        navigate("/Login")
    }

    return (
        <div>
            <DisplayLaguage />
            <h2>Hello, {name}!</h2>
            {/* <input ref={inputRef} value={name} onChange={handleName} /> */}
            {/* <Link to="login">Login to the App</Link> */}
            <div>
                <button onClick={handleLoginButton}>Enter the App</button>
            </div>
        </div>
    )
}

// export class Welcome extends React.Component {
//     render() {
//         const welcomeStyle = {
//             color: this.props.name ? "green" : "red",
//             backgroundColor: "#333",
//         }

//         return (
//             <div style={welcomeStyle}>
//                 {!!this.props.name && <h2>Hello, {this.props.name}</h2>}
//                 {!this.props.name && <h2>Hello, World!</h2>}
//             </div>
//         )
//     }
// }
