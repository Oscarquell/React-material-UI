import React from "react";
import './style.css'
import {Checkbox} from "@mui/material";

const SignInPage = () => {
    return (
        <div className="sign-page">
            <h2 className="lk">Войти в личный кабинет</h2>
            <form>
                <input type="text" className="input-field" placeholder="Введите лицевой счет"/>
                <input type="password" className="input-field" placeholder="Пароль от личного кабинета"/>
                <button className="login-btn">Войти</button>
                <Checkbox size="small" color="default"/>
                <span>Запомнить меня</span>
            </form>
            <div className="aknet">
                <img className="aknt" src="./Aknet2023.jpg" alt="aknet-image"/>
            </div>
        </div>
    )
}


export default SignInPage;