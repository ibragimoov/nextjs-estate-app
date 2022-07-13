import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '7ad45fdcc6msh319d4af30e83ba1p120b73jsn17a90b6bc367',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}