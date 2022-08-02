import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './blocks/MainPage/MainPage';
import { FirstQuizPage } from './blocks/FirstQuizPage/FirstQuizPage';
import { FirstQuizPageAnswer } from './blocks/FirstQuizPageAnswer/FirstQuizPageAnswer';
import { SecondQuizPage } from './blocks/SecondQuizPage/SecondQuizPage';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="/" element={<MainPage />} />

        <Route path="/firstQuestion" element={<FirstQuizPage />} />

        <Route path="/correctFirstAnswer" element={<FirstQuizPageAnswer answer />} />

        <Route path="/incorrectFirstAnswer" element={<FirstQuizPageAnswer answer={false} />} />

        <Route path="/secondQuestion" element={<SecondQuizPage />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
};
