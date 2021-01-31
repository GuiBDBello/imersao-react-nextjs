import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - GuiDB</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>CSS</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do React');
            }}
            >
              <input
                placeholder="Diz aí seu nome para jogar :)"
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" disabled={name.length < 2}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Quiz</p>
            <p>Quiz</p>
            <p>Quiz</p>
            <p>Quiz</p>
            <p>Quiz</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/GuiDB" />
    </QuizBackground>
  );
}
