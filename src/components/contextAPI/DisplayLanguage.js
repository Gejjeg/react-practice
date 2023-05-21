import { useContext } from "react";
import { LanguageContext } from "./LanguageCountext";

export function DisplayLaguage() {
    const language = useContext(LanguageContext)

    return (
        <h3>Current Language: {language}</h3>
    )
}
