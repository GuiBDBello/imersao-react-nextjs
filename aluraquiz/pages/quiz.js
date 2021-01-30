import styled from 'styled-components'
import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'

export default function Quiz() {
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <GitHubCorner projectUrl="https://github.com/GuiDB" />
      </QuizBackground>
    </>
  );
}
