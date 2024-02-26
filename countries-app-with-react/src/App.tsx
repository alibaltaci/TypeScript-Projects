import axios from "axios"
import { CountryType } from "./types"
import { useEffect, useState } from "react"
import CountryComponent from "./components/CountryComponent"

export default function App() {

    const [countries, setCountries] = useState<CountryType[]>( [] )

    const getCountries = async() => {
        try {
            const { data } = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all")
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
    <div>
        {countries.map( country =>{ 
            return <CountryComponent key={country.name.official} country={country} />
         })}
    </div>
  )
}
