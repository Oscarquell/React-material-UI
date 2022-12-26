import React from "react";
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage";
import Index from "./pages/aboutus";
import SignInPage from "./pages/signin";
import NotFoundPage from "./pages/NotFound";


const App = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="lnk-btn"><Link className="link-btn" to='/'>Home</Link></div>
                    <div className="lnk-btn"><Link className="link-btn" to='/about'>About Us</Link></div>
                    <div className="lnk-btn"><Link className="link-btn" to='/signin'>Sign In</Link></div>
                </div>
            </header>
            <main>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route exact path='/about'>
                        <Index />
                    </Route>
                    <Route exact path='/signin'>
                        <SignInPage />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </main>
            <hr/>
            <footer>
                <div className="container-footer">
                    <div className="social-pages">
                        <span className="for-br">Мы в социальных сетях:</span>
                        <div className="icon-links">
                            <div className="icons">
                                <a href="https://www.instagram.com/aknet_official/"><img src="/inst.svg" alt="instagram-icon"/></a>
                            </div>
                            <div className="icons">
                                <a href="https://www.facebook.com/aknetkg"><img src="/fb.svg" alt="facebook-icon"/></a>
                            </div>
                            <div className="icons">
                                <a href="https://vk.com/itv_aknet"><img src="/Vk.svg" alt="Vkontakte-icon"/></a>
                            </div>
                            <div className="icons">
                                <a href="https://twitter.com/Aknet_KG"><img src="/tw.svg" alt="twitter-icon"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="adress">
                        <span className="city">Бишкек</span>
                        <span className="office">
                            Центральный офис: пр. Чуй, 265 А
                            <span className="for-br">
                                Пн - Пт: 9:00 - 18:00
                            </span>
                            <span className="for-br">
                                Сб: 10:00 - 16:00, Вс: выходной
                            </span>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App;