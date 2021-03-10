import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client';
import React from 'react';
import Login from '../components/Login';
import Head from 'next/head';
import { Menu } from '../components/Menu';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Home } from './homePage';
import styles from '../styles/pages/Tabs.module.css'
interface TabsProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Tabs(props: TabsProps) {
  const [ session, loading ] = useSession()
  return (
    <section>
      <Head>
        <title>Início | move.it</title>
      </Head>
      {!session ? (
        <Login />
      ) : (
        <ChallengesProvider 
          level={props.level} 
          currentExperience={props.currentExperience} 
          challengesCompleted={props.challengesCompleted}
        >
          <div className={styles.tabsContainer}>
            <Menu />
            <Home />
          </div>
        </ChallengesProvider>
      )}
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}