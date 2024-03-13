import Keys from "../../letterList.json";
import styles from './Keyboard.module.css';

const Keyboard = () => {
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
          return (
            <button 
              key={key}
              className={`${styles.btn}`} 
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