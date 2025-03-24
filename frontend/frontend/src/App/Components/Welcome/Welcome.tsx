import React from "react";
import "./Welcome.scss";
import expertsImage from "../../../assets/picturesMain/tandp .png";

const MAIN_TEXT = "Специалист по лову жуков";
const DESCRIPTION = "Специалист СЛЖ (систем ловли жучков) выстраивает ловуши для жучковых перерабатывающих компаний, чтобы не допустить утечки жучков.";
const CHOOSE_COURSE = "Выбрать курс";
const EXPERTS_NAMES = "Тимон и Пумба";
const EXPERTS_LEVEL = "Основатели, главные эксперты";

const Welcome = () => {
  return (
    <div className="main-container">
      <div className="main-background-container">
        <div className="main-background"></div>
      </div>
      <div className="main-text-container">
        <div className="external-main-text-container">
          <div className="inner-main-text-container">{MAIN_TEXT}</div> 
        </div>
      </div>
      <div className="description-text-container">
        <div className="extrnal-description-text-container">
          <div className="description-inner-text-container">{DESCRIPTION}</div>
        </div>
      </div>
      <div className="external-main-button-container">
        <div className="main-button-container">
          <button className="main-button">{CHOOSE_COURSE}</button>
        </div>
      </div>
      <div className="external-experts-container">
        <div className="external-second-experts-container">
          <div className="experts-container">
            <div className="borders-of-inner-experts-container">
              <div className="inner-experts-container">
                <div className="experts-image-container">
                  <img 
                    className="experts-image" 
                    src={expertsImage}
                    alt="Фото экспертов"
                  />
                </div>
                <div className="text-expert-container">
                  <div className="borders-names-experts-container">
                    <div className="names-experts-container">{EXPERTS_NAMES}</div>
                  </div>
                  <div className="experts-level-container">{EXPERTS_LEVEL}</div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;