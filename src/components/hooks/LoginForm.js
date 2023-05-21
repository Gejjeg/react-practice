import { useState } from "react"

export function LoginForm() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    const handleInputChange = (event) => {
        const { name, type, value, checked } = event.target

        setData(data => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }
        })

    }

    console.log(data);

    return (
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" value={data.password} onChange={handleInputChange} />
            <input name="remember" type="checkbox" value={data.remember} onChange={handleInputChange} />
        </div>
    )
}
