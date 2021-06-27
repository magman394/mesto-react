import React from "react";
import BoxCardDeleteBotton from '../images/delete.png';

function Card(props) {
  function handleClick() {
  props.onCardClick({img: props.link, title: props.name});
}  
  return (
    <div id="boxCards">
        <div key={props.id} className="element" id="cardElement">
          <img id="cardLink" className="element__image" src={props.link} onClick={handleClick} alt="фото"/>
          <div className="element__btn_delete">
            <button id="bottonDel" className="element__btn_delete-active opacity-link" type="button"><img src={BoxCardDeleteBotton} width="18" height="17" alt="Удалить"/></button>
          </div>
          <div className="element__info">
            <h3 className="element__title" id="cardTitle">{props.name}</h3>
            <div className="element__likes">
              <button id="likebutton" type="button" className="element__likes element__likes_like-btn"></button>
              <p className="element__likes element__likes_like-count">{props.likes}</p>
            </div>
          </div>
        </div>
     </div>
  );
}

export default Card;
