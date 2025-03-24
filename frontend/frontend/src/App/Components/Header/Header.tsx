import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";


const NAME = "Академия Охоты на Жуков";
const ABOUT = "О нас";
const COURSES = "Курсы";
const FEEDBACK = "Отзывы";
const SALES = "Акции";
const COURSES_BUILDER= "Конструктор курсов";

const Header = () => {
    return (
        <div className="header-container">
            <div className="external-header-container">
                <div className="inner-container">
                    <div className="comp-name-container">{NAME}</div>
                    
                    <div className="nav-container">
                        <div className="nav-link">{ABOUT}</div>
                        <div className="nav-link">{COURSES}</div>
                        <div className="nav-link">{FEEDBACK}</div>
                        <div className="nav-link">{SALES}</div>
                        <div className="nav-link">{COURSES_BUILDER}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
