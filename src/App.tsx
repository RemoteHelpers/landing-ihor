import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './blocks/MainPage/MainPage';
import { FirstQuizPage } from './blocks/FirstQuizPage/FirstQuizPage';
import { FirstQuizPageAnswer } from './blocks/FirstQuizPageAnswer/FirstQuizPageAnswer';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="/" element={<MainPage />} />

        <Route path="/firstQuestion" element={<FirstQuizPage />} />

        <Route path="/firstQuestionAnswer" element={<FirstQuizPageAnswer />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
};
