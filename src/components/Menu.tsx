import { useState } from 'react'
import styles from '../styles/components/Menu.module.css'



export function Menu(){
  const [isOptionHome, setIsOptionHome] = useState(true);
  const changeState = () => {
    setIsOptionHome(!isOptionHome)
  }
  return(
    <section className={styles.menuContainer}>
      {isOptionHome ? (
        <>
          <a>
            <img src="/icons/house-active.svg" alt=""/>
          </a>
          <a onClick={changeState}>
            <img src="/icons/award.svg" alt=""/>
          </a>
        </>
      ) : (
        <>
          <a onClick={changeState}>
            <img src="/icons/house.svg" alt=""/>
          </a>
          <a>
            <img src="/icons/award-active.svg" alt=""/>
          </a>
        </>
      )}
    </section>
  )
}