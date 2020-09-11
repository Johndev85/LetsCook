import { useState, useEffect } from "react"

function useRecipes({ url }) {
    const [recipes, setRecipes] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setRecipes(result.body)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    return [recipes, isLoaded, error]
}

export default useRecipes
