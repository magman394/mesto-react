import React from "react";
import boxCardDeleteBotton from '../images/delete.png';


function Card({onCardClick, deleteButton, link, name, likes, likeButton, onCardLike, _id}) {
  function handleClick() {
    onCardClick({img: link, title: name});
    
  } 
  function handleLikeClick() {
    onCardLike(_id);
    
  } 
  
  return (
    <div className="elements__box" id="boxCards">

          <div className="element" id="cardElement">
            <img id="cardLink" className="element__image" src={link} onClick={handleClick} alt={name}/>
            <div className="element__btn_delete">
              <button id="bottonDel" className={deleteButton} type="button"><img src={boxCardDeleteBotton} width="18" height="17" alt="Удалить"/></button>
            </div>
            <div className="element__info">
              <h3 className="element__title" id="cardTitle">{name}</h3>
              <div className="element__likes">
                <button id="likebutton" type="button" className={likeButton} onClick={handleLikeClick}></button>
                <p className="element__likes element__likes_like-count">{likes.length}</p>
              </div>
            </div>
          </div>

     </div>
  );
}

export default Card;
