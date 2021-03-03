import { useSession } from 'next-auth/client';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallengesContext)
  const [ session, loading ] = useSession()
  return(
    <div className={styles.profileContainer}>
      <img src={`${session.user.image}`} alt="Danilo Dominoni"/>
      <div>
        <strong>Danilo Dominoni</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  )
}