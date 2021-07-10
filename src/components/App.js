import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext, defaultUser} from '../contexts/CurrentUserContext';
import {CurrentCardContext} from '../contexts/CurrentCardContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {


  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditImagePopupOpen, setEditImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ img: null, title: null})
  
  const [currentUser, setCurrentUser] = React.useState(defaultUser)
  const [cards, setCards] = React.useState([])



  
  React.useEffect(() => {
    api
    .getUserInfo()
    .then(response => {
      setCurrentUser(response)
    }).catch((err) => alert(err));
    api
    .getAllTasks()
    .then(response => {
      setCards(response)
    }).catch((err) => alert(err))
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
  const handleUpdateUser = (onUpdateUser) => {
    api
    .setUserInfo(onUpdateUser)
    .then(response => {
      setCurrentUser(response)
    }).catch((err) => alert(err));
    setEditProfilePopupOpen(false);
  }
  const handleUpdateAvatar = (onUpdateUser) => {
    api
    .setUserAvatar(onUpdateUser)
    .then(response => {
      setCurrentUser(response)
    }).catch((err) => alert(err));
    setEditAvatarPopupOpen(false);

  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <CurrentCardContext.Provider value={cards}>
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        setCards={setCards}
        />
        </CurrentCardContext.Provider>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="popupCard">
          <input name="name" type="text" className="popup__input" minLength="2" maxLength="30" required placeholder="Название" id="inputTitle"/>
          <span id="inputTitle-error" className="popup__error"></span>
          <input name="link" id="inputLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
          <span id="inputLink-error" className="popup__error"></span>
        </PopupWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <PopupWithForm title="Вы уверены?" name="popup__form-avatar" buttonText="Да" />
        <ImagePopup name="popupImage" onClose={closeAllPopups} card={selectedCard} isOpen={isEditImagePopupOpen} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;