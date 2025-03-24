import React from "react";
import "./Offer.scss";

const NAME = "Просто взлом";
const NAME_DESC = "с нуля до первого пентеста";
const PRICE = "Бесплатно | марафон";
const DESC = "Вы на практике погрузитесь в профессию — попробуете как атаковать, так и защитить от взлома. Поймете, как превратить интерес к хакингу в законную и доходную карьеру";
const BUTTON = "Получить";
const TAPE_TEXT = "FREE ";
const DAYS_TEXT = " 3 дня";


const Offer = () => {
    return (
        <div className="offer-container">
            <div className="tape1"></div>
            <div className="tape-text-1">{TAPE_TEXT.repeat(11)}</div>
            <div className="tape2"></div>
            <div className="tape-text-2">{TAPE_TEXT.repeat(11)}</div>
            <div className="tape3"></div>
            <div className="tape4"></div>
            <div className="borders-of-hacking-container">
                <div className="hacking-container">
                    <div className="days">
                        <div className="days-text">{DAYS_TEXT}</div>
                    </div>
                    <div className="borders-of-image">
                        <div className="image"></div>
                    </div>
                    <div className="borders-of-course-name">
                        <div className="course-name">{NAME}</div>
                    </div>
                    <div className="borders-of-name-description-container">
                        <div className="name-description-container">{NAME_DESC}</div>
                    </div>
                    <div className="borders-of-price-container">
                        <div className="price-container">{PRICE}</div>
                    </div>
                    <div className="borders-of-description-container">
                        <div className="description-container">{DESC}</div>
                    </div>
                    <div className="borders-of-button">
                        <button className="button">{BUTTON}</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Offer;