import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './blocks/MainPage/MainPage';
import { FirstQuizPage } from './blocks/FirstQuizPage/FirstQuizPage';
import { FirstQuizPageAnswer } from './blocks/FirstQuizPageAnswer/FirstQuizPageAnswer';
import { SecondQuizPage } from './blocks/SecondQuizPage/SecondQuizPage';
import { SecondQuizPageAnswer } from './blocks/SecondQuizPageAnswer/SecondQuizPageAnswer';
import { ThirdQuizPage } from './blocks/ThirdQuizPage/ThirdQuizPage';
import { ThirdQuizPageAnswer } from './blocks/ThirdQuizPageAnswer/ThirdQuizPageAnswer';
import './App.scss';
import { FourthQuizPage } from './blocks/FourthQuizPage/FourthQuizPage';
import { Form } from './blocks/Form/Form';
import { Rejected } from './blocks/Rejected/Rejected';
import { Approved } from './blocks/Approved/Approved';
import { AdditionalDiscount } from './blocks/AdditionalDiscount/AdditionalDiscount';
import { ApproveTestimonials } from './blocks/ApproveTestimonials/ApproveTestimonials';

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

        <Route path="/correctSecondAnswer" element={<SecondQuizPageAnswer answer />} />

        <Route path="/incorrectSecondAnswer" element={<SecondQuizPageAnswer answer={false} />} />

        <Route path="/thirdQuestion" element={<ThirdQuizPage />} />

        <Route path="/thirdAnswer" element={<ThirdQuizPageAnswer answer />} />

        <Route path="/fourthQuestion" element={<FourthQuizPage />} />

        <Route path="/form" element={<Form />} />

        <Route path="/opportunity" element={<Rejected />} />

        <Route path="/approved" element={<Approved />} />

        <Route path="/5discount" element={<AdditionalDiscount />} />

        <Route path="/approvedTestimonials" element={<ApproveTestimonials answer />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
};
