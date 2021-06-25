import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(false)

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen({ isEditAvatarPopupOpen: true });
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen({ isAddPlacePopupOpen: true });
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen({ isAddPlacePopupOpen: true });
  }
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(false)
  }
  const handleCardClick = (props) => {
  setSelectedCard({ selectedCard: true, img: props.img, title: props.title})
}
  return (
    <>
      <div className="page">
        <Header />
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} popupid="popupAutor" formid="formAutor" buttonid="saveAutor" title="Редактировать профиль" classtype="popup__title_color_black">
          <input name="firstName" id="firstName" type="text" className="popup__input" minLength="2" maxLength="40" required placeholder="Имя"/>
          <span id="firstName-error" className="popup__error"></span>
          <input name="lastName" id="lastName" type="text" className="popup__input" minLength="2" maxLength="200" required placeholder="Профессия"/>
          <span id="lastName-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} popupid="popupCard" formid="formCards" buttonid="saveCard" title="Новое место" classtype="popup__title_color_black">
          <input name="name" type="text" className="popup__input" minLength="2" maxLength="30" required placeholder="Название" id="inputTitle"/>
          <span id="inputTitle-error" className="popup__error"></span>
          <input name="link" id="inputLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
          <span id="inputLink-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} popupid="popupAvatar" formid="closeAvatar" buttonid="saveAvatar" title="Обновить аватар" classtype="popup__title_not_margin">
            <input name="link" id="AvatarLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
            <span id="AvatarLink-error" className="popup__error"></span>
        </PopupWithForm>
        <ImagePopup  onClose={closeAllPopups} card={selectedCard} />
      </div>
   </>
  );
}

export default App;