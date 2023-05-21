import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())

export function useGithubUser(username) {
    //     const [data, setData] = useState(null)
    //     const [loading, setLoading] = useState(false)
    //     const [error, setError] = useState(null)

    //     async function fetchGithubUser(username) {
    //         setLoading(true)
    //         setError(null)

    //         try {
    //             const response = await fetch(`https://api.github.com/users/${username}`)
    //             const json = await response.json()

    //             if (response.status !== 200) {
    //                 setError(new Error())
    //             }

    //             setData(json)
    //         } catch (error) {
    //             setError(error)
    //             setData(null)
    //         } finally {
    //             setLoading(false)
    //         }

    // }

    const {data, error, mutate} = useSWR(`${process.env.REACT_APP_SERVER_UR}/${username}`, fetcher)

    const fetchGithubUser = () => {
        mutate()
    }

    return { data, loading: !data && !error, error, onFetchUser: fetchGithubUser }
}
