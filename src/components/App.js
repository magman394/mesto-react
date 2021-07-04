import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext, defaultUser} from '../contexts/CurrentUserContext';

function App() {


  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditImagePopupOpen, setEditImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ img: null, title: null})
  const [currentUser, setCurrentUser] = React.useState(defaultUser)

  React.useEffect(() => {
    api
    .getUserInfo()
    .then(response => {
      setCurrentUser(response)
    }).catch((err) => alert(err));
    }, [])

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditImagePopupOpen(false);
    setSelectedCard({ img: null, title: null})
  }
  const handleCardClick = (props) => {
  setSelectedCard({ img: props.img, title: props.title})
  setEditImagePopupOpen(true);
}
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="popupAutor">
          <input name="firstName" id="firstName" type="text" className="popup__input" minLength="2" maxLength="40" required placeholder="Имя"/>
          <span id="firstName-error" className="popup__error"></span>
          <input name="lastName" id="lastName" type="text" className="popup__input" minLength="2" maxLength="200" required placeholder="Профессия"/>
          <span id="lastName-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="popupCard">
          <input name="name" type="text" className="popup__input" minLength="2" maxLength="30" required placeholder="Название" id="inputTitle"/>
          <span id="inputTitle-error" className="popup__error"></span>
          <input name="link" id="inputLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
          <span id="inputLink-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="popupAvatar">
            <input name="link" id="AvatarLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
            <span id="AvatarLink-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="popup__form-avatar" buttonText="Да" />
        <ImagePopup name="popupImage" onClose={closeAllPopups} card={selectedCard} isOpen={isEditImagePopupOpen} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;