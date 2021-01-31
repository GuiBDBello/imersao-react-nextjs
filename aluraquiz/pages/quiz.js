import React from 'react';

import db from '../db.json';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <GitHubCorner projectUrl="https://github.com/GuiDB" />
    </QuizBackground>
  );
}
