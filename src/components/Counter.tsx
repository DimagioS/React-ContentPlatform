import { useState } from "react"
import styles from './Counter.module.scss'

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  return( 
    <div>
      <h1>{count}</h1>
      <button className={styles.btn} onClick={increment}>increment</button>
    </div>
  )
}

export default Counter