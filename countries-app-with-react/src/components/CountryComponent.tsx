import { FunctionComponent } from "react"
import { CountryType } from "../types"

interface ICountryProps {
    country: CountryType
    // capital: string[]
}

const CountryComponent: FunctionComponent<ICountryProps> = (props) => {
  const { name, capital } = props.country;
  return (
    <p >
      {name.common} - {capital}
    </p>
  )
}

export default CountryComponent
