import React from "react";
import ProfileEditBotton from '../images/edit-botton.svg';
import ProfileAddBotton from '../images/add-botton.svg';
import DefultAvatar from '../images/avatar-image.jpg';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Cards from './cards';
import api from '../utils/API';

function Main() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [userName, setUserName] = React.useState('Жак-Ив Кусто')
    const [userDescription, setUserDescription] = React.useState('Мореплаватель')
    const [userAvatar, setUserAvatar] = React.useState(DefultAvatar)
  

  const handleEditAvatarClick = () => {
    setIsOpen({ isOpen: true });
    if (isOpen === true) {
    } else {
    document.querySelector('#popupAvatar').classList.add('popup_is-opened');
    }
  }
  const handleEditProfileClick = () => {
    setIsOpen({ isOpen: true });
    if (isOpen === true) {
    } else {
    document.querySelector('#popupAutor').classList.add('popup_is-opened');
    }
  }
  const handleAddPlaceClick = () => {
    setIsOpen({ isOpen: true });
    if (isOpen === true) {
    } else {
    document.querySelector('#popupCard').classList.add('popup_is-opened');
    }
  }
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
            <button className="profile__botton" type="button" onClick={handleEditAvatarClick}><img className="profile__avatar opacity-link opacity-link_avatar" src={userAvatar} alt="аватарка"/></button>
              <div className="profile__profile-info">
                <div className="profile__edit-name">
                  <h1 className="profile__name">{userName}</h1>
                  <button type="button" className="profile__edit-botton opacity-link" onClick={handleEditProfileClick}><img src={ProfileEditBotton} alt="кнопка редактирования"/></button>
                </div>
                <h2 className="profile__profession">{userDescription}</h2>
              </div>
            <button type="button" className="profile__add-botton opacity-link" onClick={handleAddPlaceClick}><img src={ProfileAddBotton} alt="кнопка добавления"/></button>
          </section>
          <section className="elements">

            {cards.map((item) => {
              return (
                <Cards key={item.id} {...item} />
              )
            })}

          </section>
        <PopupWithForm isOpen="false" popupid="popupAutor" formid="formAutor" buttonid="saveAutor" title="Редактировать профиль" classtype="popup__title_color_black">
          <input name="firstName" id="firstName" type="text" className="popup__input" minLength="2" maxLength="40" required placeholder="Имя"/>
          <span id="firstName-error" className="popup__error"></span>
          <input name="lastName" id="lastName" type="text" className="popup__input" minLength="2" maxLength="200" required placeholder="Профессия"/>
          <span id="lastName-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm isOpen="false" popupid="popupCard" formid="formCards" buttonid="saveCard" title="Новое место" classtype="popup__title_color_black">
          <input name="name" type="text" className="popup__input" minLength="2" maxLength="30" required placeholder="Название" id="inputTitle"/>
          <span id="inputTitle-error" className="popup__error"></span>
          <input name="link" id="inputLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
          <span id="inputLink-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm isOpen="false" popupid="popupDelCard" formid="formDel" buttonid="deleteCard" title="Вы уверены?" classtype="popup__title_not_margin">
          <input name="name" type="text" className="popup__input" minLength="2" maxLength="30" required placeholder="Название" id="inputTitle"/>
          <button id="deleteCard" type="submit" className="popup__submit popup__submit_mini_margin">Да</button>
        </PopupWithForm>
        <PopupWithForm isOpen="false" popupid="popupAvatar" formid="closeAvatar" buttonid="saveAvatar" title="Обновить аватар" classtype="popup__title_not_margin">
            <input name="link" id="AvatarLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
            <span id="AvatarLink-error" className="popup__error"></span>
        </PopupWithForm>
        <ImagePopup />
        </main>
  );

}
export default Main;