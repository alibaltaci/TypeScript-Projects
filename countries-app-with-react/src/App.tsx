import axios from "axios"
import { Country } from "./types"
import { useEffect, useState } from "react"

export default function App() {

    const [countries, setCountries] = useState<Country[]>( [] )

    const getCountries = async() => {
        try {
            const { data } = await axios.get<Country[]>("https://restcountries.com/v3.1/all")
            setCountries(data)
        } catch (error) {
            console.log("Hata: ", error)
        }
    } 
    
    useEffect(() => {
        getCountries();
    }, [])

    console.log( {countries} )
  return (
    <div>Countries App</div>
  )
}
