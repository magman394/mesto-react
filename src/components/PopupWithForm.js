import React from "react";
import PopupCloseIcon from '../images/Close-Icon.svg';
const PopupWithForm = (props) => {

    return (
        <div class="popup" id={props.popupid} >
          <div class="popup__container">
            <button type="button" class="popup__close opacity-link"><img src={PopupCloseIcon} alt="кнопка закрытия"/></button>
            <form class="popup__form" name="popup-profile" id={props.formid} novalidate>
              <h2 class={`popup__title ${props.classtype}`}>{props.title}</h2>
              {props.children}
              <button id={props.buttonid} type="submit" class="popup__submit">Сохранить</button>
            </form>
          </div>
        </div>
    );
  }
  export default PopupWithForm;
