import React from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onUpdateCard}) {


    const [link, setLink] = React.useState();
    const [name, setName] = React.useState();
    function handleChangeLink(e) {
        e.preventDefault();
        setLink(e.target.value);
      }
    function handleChangeTitle(e) {
      e.preventDefault();
      setName(e.target.value);
    }

      function handleSubmit(e) {
        e.preventDefault();
        onUpdateCard({
          name,
          link,
        });
         e.target.form.reset();
      }


    return (
      <PopupWithForm onClose={onClose} isOpen={isOpen} title="Новое место" name="popupCard" onSubmit={handleSubmit} >
        <input onChange={handleChangeTitle} name="name" type="text" className="popup__input" minLength="2" maxLength="30" required placeholder="Название" id="inputTitle"/>
        <span id="inputTitle-error" className="popup__error"></span>
        <input onChange={handleChangeLink} name="link" id="inputLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
        <span id="inputLink-error" className="popup__error"></span>
      </PopupWithForm>
    )
}
export default AddPlacePopup;
