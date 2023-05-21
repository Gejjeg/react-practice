import { Link, Outlet } from "react-router-dom";
import { useGithubUsers } from "./useGitHubUsers";

export function GithubUsers() {
    const { users, error, isLoading, onRefresh } = useGithubUsers()

    return (
        <div>
            <button onClick={onRefresh}>Refresh</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>An error has occurred</h3>}
            {users && (<ul>
                {users.map(user => (
                    <li key={user.id}><Link to={`/users/${user.login}`}></Link>{user.login}</li>
                ))}
            </ul>
            )}

            <Outlet />
        </div>
    )
}
