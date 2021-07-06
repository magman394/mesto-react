import React from "react";
import profileEditBotton from '../images/edit-botton.svg';
import profileAddBotton from '../images/add-botton.svg';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {CurrentCardContext} from '../contexts/CurrentCardContext';
import Card from './Card';
import api from '../utils/api';


function Main({onEditAvatar, onAddPlace, onEditProfile, onCardClick, setCards}) {
    const userInfo = React.useContext(CurrentUserContext);
    const cardInfo = React.useContext(CurrentCardContext);



   

    return (
        <main className="content">
          <section className="profile">
            <button className="profile__botton" type="button" onClick={onEditAvatar}><img className="profile__avatar opacity-link opacity-link_avatar" src={userInfo.avatar} alt="аватарка"/></button>
              <div className="profile__profile-info">
                <div className="profile__edit-name">
                  <h1 className="profile__name">{userInfo.name}</h1>
                  <button type="button" className="profile__edit-botton opacity-link" onClick={onEditProfile}><img src={profileEditBotton} alt="кнопка редактирования"/></button>
                </div>
                <h2 className="profile__profession">{userInfo.about}</h2>
              </div>
            <button type="button" className="profile__add-botton opacity-link" onClick={onAddPlace}><img src={profileAddBotton} alt="кнопка добавления"/></button>
          </section>

          <section className="elements">
            {cardInfo.map((item) => {
              const isOwn = item.owner._id === userInfo._id;
              const cardDeleteButtonClassName = (
                `${isOwn ? 'element__btn_delete-active opacity-link' : 'element__btn opacity-link'}`
              );   
              const isLiked = item.likes.some(i => i._id === userInfo._id);
              const cardLikeButtonClassName = `${isLiked ? 'element__likes_active element__likes_like-btn' : 'element__likes element__likes_like-btn'}`; 
              function handleCardLike(likes) {

                const isLiked = likes.some(i => i._id === userInfo._id);
                api.changeLikeCardStatus(item._id, !isLiked).then((newCard) => {
                  setCards((state) => state.map((c) => c._id === item._id ? newCard : c));
                });
            } 
            return (
              <Card onCardClick={onCardClick} key={item._id} {...item} deleteButton={cardDeleteButtonClassName} likeButton={cardLikeButtonClassName} onCardLike={handleCardLike} />
            )
                  })}
          </section>


        </main>
  );

}
export default Main;