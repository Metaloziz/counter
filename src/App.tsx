import { ReactFragment } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import s from './App.module.css';
import { DisplayContainer } from './components/DisplayContainer/DisplayContainer';
import { NavigateHeader } from './components/Navigate/Navigate';
import { SettingContainer } from './components/SettingContainer/SettingContainer';

import { ADD, RES, SET } from 'reducer_my';

export const App = (): ReactFragment => (
  <>
    <NavigateHeader />
    <div className={s.main}>
      <Routes>
        <Route path={'/*'} element={<Navigate replace to="/1" />} />
        <Route path="/1" element={<DisplayContainer titleADD={ADD} titleRES={RES} />} />
        <Route path="/2" element={<SettingContainer titleSET={SET} />} />
      </Routes>
    </div>
  </>
);
