import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navigate.module.css'

export const NavigateHeader = () => {
    return <div className={s.buttons}>
        <NavLink to={'/1'}>
            <button>Display</button>
        </NavLink>
        <NavLink to={'/2'}>
            <button>Setting</button>
        </NavLink>
    </div>
}