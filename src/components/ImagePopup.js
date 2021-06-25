import PopupCloseIcon from '../images/Close-Icon.svg';
function ImagePopup(props) {
    return (
        <div className={`popup${props.card ? ' popup_is-opened' : ''}`} id="popupImage">
          <div className="popup__image-container">
              <button type="button" className="popup__close opacity-link"><img src={PopupCloseIcon} onClick={props.onClose} alt="кнопка закрытия"/></button>
              <img className="popup__image" src={props.card.img} alt={props.card.title}/>
              <h2 className="popup__title" id="popupTtl">{props.card.title}</h2>
          </div>
        </div>
  );
}
export default ImagePopup;