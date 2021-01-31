import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';

import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do React');
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz aí seu nome para jogar :)"
                value={name}
              />
              <Button type="submit" disabled={name.length < 2}>
                {`Jogar ${name}`}
              </Button>
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
