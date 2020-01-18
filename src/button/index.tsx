import React, { useState } from 'react'
import s from "./index.module.css";


const Button = () => {
  const [toggle, setToggle] = useState(false)

  const x = `${s.button} ${toggle ? s.aa : ''}`

  const foo = () => {
    setToggle(!toggle)
  }

  return <button onClick={foo} className={x}>button</button>
}

export default Button