import React from 'react';
import './App.module.css';
import s from "./App.module.css";
import {DisplayContainer} from "./components/DisplayContainer/DisplayContainer";
import {SettingContainer} from "./components/SettingContainer/SettingContainer";
import {Navigate, Route, Routes} from "react-router-dom";
import {NavigateHeader} from "./components/Navigate/Navigate";
import {ADD, RES, SET} from "./reducer_my/Reducer";


function App() {

    // const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <NavigateHeader/>
            <div className={s.main}>
                <Routes>
                    <Route path={'/*'} element={<Navigate replace to={"/1"}/>}/>
                    <Route path={'/1'} element={
                        <DisplayContainer titleADD={ADD} titleRES={RES}/>}
                    />
                    <Route path={'/2'} element={
                        <SettingContainer titleSET={SET}/>}
                    />
                </Routes>
            </div>
        </>
    );
}
// test verification wtf ?
export default App;
