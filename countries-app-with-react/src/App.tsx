import axios from "axios"
import { CountryType } from "./types"
import { useEffect, useState } from "react"
import CountryComponent from "./components/CountryComponent"
import Loading from "./components/Loading"

export default function App() {

    const [countries, setCountries] = useState<CountryType[]>( [] )
    const [loading, setLoading] = useState<boolean>(false)

    const getCountries = async() => {
        setLoading(true)
        try {
            const { data } = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all")
            setCountries(data)
        } catch (error) {
            console.log("Hata: ", error)
        } finally{
            setLoading(false)
        }
    } 
    
    useEffect(() => {
        getCountries();
    }, [])

    console.log( {countries} )

  return (
    <div>
        <Loading loading={loading} >
            {countries.map( country =>{ 
                return <CountryComponent key={country.name.official} country={country} />
            })}
        </Loading>
    </div>
  )
}
