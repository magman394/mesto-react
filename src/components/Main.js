import React from "react";
import profileEditBotton from '../images/edit-botton.svg';
import profileAddBotton from '../images/add-botton.svg';
import defultAvatar from '../images/avatar-image.jpg';

import Card from './cards';

import Api from '../utils/api';


function Main(props) {

    const [userName, setUserName] = React.useState('Жак-Ив Кусто')
    const [userDescription, setUserDescription] = React.useState('Мореплаватель')
    const [userAvatar, setUserAvatar] = React.useState(defultAvatar)
    const {onEditAvatar, onAddPlace, onEditProfile, onCardClick} = props;
    const [cards, setCards] = React.useState([])

    
      React.useEffect(() => {
        Api
        .getUserInfo()
        .then(response => {
          setUserName(response.name)
          setUserDescription(response.about)
          setUserAvatar(response.avatar)
        }).catch((err) => alert(err));

        Api
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
        }).catch((err) => alert(err));
        }, [])


    return (
        <main className="content">
          <section className="profile">
            <button className="profile__botton" type="button" onClick={onEditAvatar}><img className="profile__avatar opacity-link opacity-link_avatar" src={userAvatar} alt="аватарка"/></button>
              <div className="profile__profile-info">
                <div className="profile__edit-name">
                  <h1 className="profile__name">{userName}</h1>
                  <button type="button" className="profile__edit-botton opacity-link" onClick={onEditProfile}><img src={profileEditBotton} alt="кнопка редактирования"/></button>
                </div>
                <h2 className="profile__profession">{userDescription}</h2>
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