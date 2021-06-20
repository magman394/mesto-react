import React from "react";
import PopupCloseIcon from '../images/Close-Icon.svg';
const PopupWithForm = (props) => {

    return (
        <div className="popup" id={props.popupid} >
          <div className="popup__container">
            <button type="button" className="popup__close opacity-link"><img src={PopupCloseIcon} alt="кнопка закрытия"/></button>
            <form className="popup__form" name="popup-profile" id={props.formid} noValidate>
              <h2 className={`popup__title ${props.classtype}`}>{props.title}</h2>
              {props.children}
              <button id={props.buttonid} type="submit" className="popup__submit">Сохранить</button>
            </form>
          </div>
        </div>
    );
  }
  export default PopupWithForm;
