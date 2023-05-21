import useSWR from "swr"

const fetcher = (url) => fetch(url).then(response => response.json())

export function useGithubUsers() {
    const { data, error, mutate } = useSWR("https://api.github.com/users", fetcher)

    const handleRefreshUsers = () => {
        mutate()
    }

    return {
        users: data,
        error,
        isLoading: !data && !error,
        onRefresh: handleRefreshUsers,
    }
}
