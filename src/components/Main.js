import React from "react";
import profileEditBotton from '../images/edit-botton.svg';
import profileAddBotton from '../images/add-botton.svg';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

import Card from './Card';
import api from '../utils/api';


function Main({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
    const userInfo = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([])

    
      React.useEffect(() => {
        api
        .getAllTasks()
        .then(response => {
          const formattedCards = response.map((item) => {
            return (
              { 
                id: item._id,
                name: item.name,
                link: item.link,
                likes: item.likes.length
              }
            )
          })
          setCards(formattedCards)
        }).catch((err) => alert(err))
        }, [])


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

            {cards.map((item) => {
              return (
                <Card onCardClick={onCardClick} key={item.id} {...item} />
              )
            })}

          </section>


        </main>
  );

}
export default Main;