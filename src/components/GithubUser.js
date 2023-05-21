import { useParams } from "react-router-dom"
import { useGithubUser } from "./hooks/useGithubUser"

export function GithubUser() {
    const { username } = useParams()
    const {data, error, loading, onFetchUser} = useGithubUser(username)

    const handleFetchGithubUser = () => {
        onFetchUser()
    }

    return (
        <div>
            <button onClick={handleFetchGithubUser}>Load Github User</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1>{data.name}</h1>}
        </div>
    )
}
