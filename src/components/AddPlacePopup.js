import React from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onUpdateCard, selectedCard}) {

  console.log(selectedCard)
    const [link, setLink] = React.useState(selectedCard.img);
    const [name, setName] = React.useState(selectedCard.title);
    function handleChangeLink(e) {
        e.preventDefault();
        setLink(e.target.value);
      }
    function handleChangeTitle(e) {
      e.preventDefault();
      setName(e.target.value);
    }

      React.useEffect(() => {
        setLink(selectedCard.img);
        setName(selectedCard.title);
      }, [selectedCard]); 
    
      function handleSubmit(e) {
        e.preventDefault();
        onUpdateCard({
          name,
          link,
        });
      }


    return (
      <PopupWithForm onClose={onClose} isOpen={isOpen} title="Новое место" name="popupCard" onSubmit={handleSubmit}>
        <input onChange={handleChangeTitle} name="name" type="text" className="popup__input" minLength="2" maxLength="30" required placeholder="Название" id="inputTitle"/>
        <span id="inputTitle-error" className="popup__error"></span>
        <input onChange={handleChangeLink} name="link" id="inputLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
        <span id="inputLink-error" className="popup__error"></span>
      </PopupWithForm>
    )
}
export default AddPlacePopup;
