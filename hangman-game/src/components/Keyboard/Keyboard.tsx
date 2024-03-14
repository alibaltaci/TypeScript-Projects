import Keys from "../../letterList.json";
import styles from './Keyboard.module.css';

type KeyboardProps = {
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void,
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) => {
  return (
    <div
      style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))",
        gap:".5rem",
      }}
    >
      {
        Keys.map(key => {

          const isActive = activeLetters.includes(key)
          const isInactive = inactiveLetters.includes(key)
          
          return (
            <button 
              key={key}
              onClick={ () => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : isInactive ? styles.inactive : ""}`} 
              disabled={isActive || isInactive}
            >
              {key}
            </button>
          )
        })
      }
    </div>
  )
}

export default Keyboard