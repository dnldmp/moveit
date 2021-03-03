import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import { GetServerSideProps } from 'next'
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import Login from '../components/Login';
import { useSession } from 'next-auth/client';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [ session, loading ] = useSession()
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
    >
      {!session ? (
        <Login />
      ) : (
        <div className={styles.container}>
          <Login />
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar />
  
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompleteChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      )}
      </ChallengesProvider>
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