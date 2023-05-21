// import React from "react";
// import { LanguageContext } from "../contextAPI/LanguageCountext";

import { useState, useContext, useEffect } from "react"
import { LanguageContext } from "../contextAPI/LanguageCountext"

// const Strings = {
//     en: {
//         CURRENT_TIME: "Current time is: "
//     },
//     it: {
//         CURRENT_TIME: "l'ora attuala a: "
//     },
// }

// export class Clock extends React.Component {
//     state = {
//         date: new Date(),
//     }

//     constructor(props) {
//         super(props)

//         setInterval(() => {
//             this.setState({
//                 date: new Date(),
//             })
//         }, 1000)
//     }

//     render() {
//         return (
//             <div>
//                 <LanguageContext.Consumer>
//                     {(Language) => {
//                         return <div>{Strings[Language].CURRENT_TIME}{this.state.date.toLocaleTimeString()}</div>
//                     }}
//                 </LanguageContext.Consumer>
//             </div>
//         )
//     }
// }

const translation = {
    it: {
        "CURRENT_TIME": "L'ora attuale e"
    },
    en: {
        "CURRENT_TIME": "Current time is"
    }
}

export function Clock() {
    const [date, setDate] = useState(new Date())
    const language = useContext(LanguageContext)

    useEffect(() => {
        const _interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(_interval)
        }
    }, [])

    return (
        <p>{translation[language]["CURRENT_TIME"]} {date.toLocaleTimeString()}</p>
    )
}
