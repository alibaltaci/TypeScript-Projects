import { BODY_PARTS } from "."

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {

  return (
    <div style={{position: "relative"}}>
        {/* { BODY_PARTS.slice(0, numberOfGuesses) } */}
        { BODY_PARTS.slice(0, numberOfGuesses).map((Part, index) => (
            <Part key={index} />
        ))}
        <div 
            style={{
                height: "50px",
                width: "10px",
                background: "black",
                position: "absolute",
                top: 0,
                right: 0,
            }} 
        />
        <div 
            style={{
                height: "10px",
                width: "200px",
                background: "black",
                marginLeft: "120px",
            }} 
        />
        <div 
            style={{
                height: "400px",
                width: "10px",
                background: "black",
                marginLeft: "120px",
            }} 
        />
        <div 
            style={{
                height: "10px",
                width: "250px",
                background: "black",
            }}
        />
    </div>
  )
}

export default HangmanDrawing