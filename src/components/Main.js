import React from "react";
import ProfileEditBotton from '../images/edit-botton.svg';
import ProfileAddBotton from '../images/add-botton.svg';
import DefultAvatar from '../images/avatar-image.jpg';
import ImagePopup from './ImagePopup';
import Cards from './cards';
import api from '../utils/API';

function Main(props) {

    const [userName, setUserName] = React.useState('Жак-Ив Кусто')
    const [userDescription, setUserDescription] = React.useState('Мореплаватель')
    const [userAvatar, setUserAvatar] = React.useState(DefultAvatar)
  


  const userInfo = () => {
    api
    .getUserInfo()
    .then(Response => {
      setUserName(Response.name)
      setUserDescription(Response.about)
      setUserAvatar(Response.avatar)
    })
  }
  React.useEffect(() => {
      userInfo()
    }, [userName, userDescription, userAvatar])


    const [cards, setCards] = React.useState([])


    const cardInfo = () => {
        api
        .getAllTasks()
        .then(Response => {
          const formattedCards = Response.map((item) => {
            return (
{              id: item._id,
              name: item.name,
              link: item.link,
              likes: item.likes.length}
            )

          })

          setCards(formattedCards)
      })
    }
    
      React.useEffect(() => {
            cardInfo()
        }, [])



    return (
        <main className="content">
          <section className="profile">
            <button className="profile__botton" type="button" onClick={props.onEditAvatar}><img className="profile__avatar opacity-link opacity-link_avatar" src={userAvatar} alt="аватарка"/></button>
              <div className="profile__profile-info">
                <div className="profile__edit-name">
                  <h1 className="profile__name">{userName}</h1>
                  <button type="button" className="profile__edit-botton opacity-link" onClick={props.onEditProfile}><img src={ProfileEditBotton} alt="кнопка редактирования"/></button>
                </div>
                <h2 className="profile__profession">{userDescription}</h2>
              </div>
            <button type="button" className="profile__add-botton opacity-link" onClick={props.onAddPlace}><img src={ProfileAddBotton} alt="кнопка добавления"/></button>
          </section>
          <section className="elements">

            {cards.map((item) => {
              return (
                <Cards key={item.id} {...item} />
              )
            })}

          </section>

        <ImagePopup />
        </main>
  );

}
export default Main;