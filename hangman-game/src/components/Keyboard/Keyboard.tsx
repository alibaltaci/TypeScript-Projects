import Keys from "../../letterList.json";
import styles from './Keyboard.module.css';

const Keyboard = () => {

  console.log(Keys)
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
          return <button className={`${styles.btn} ${styles.inactive}`} key={key}>{key}</button>
        })
      }
    </div>
  )
}

export default Keyboard