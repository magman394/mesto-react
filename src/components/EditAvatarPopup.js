import React from "react";
import PopupWithForm from './PopupWithForm';
// import {CurrentUserContext} from '../contexts/CurrentUserContext';
function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const avatarRef = React.useRef();

    function handleChangeAvatar() {

      avatarRef.current.focus();

    }

    //   React.useEffect(() => {
    //     avatarRef(currentUser.avatar);
    //   }, [currentUser]); 
    
    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      }


    return (
        <PopupWithForm onClose={onClose} isOpen={isOpen}  onSubmit={handleSubmit} title="Обновить аватар" name="popupAvatar">
            <input ref={avatarRef} onChange={handleChangeAvatar} name="link" id="AvatarLink" type="url" className="popup__input" required placeholder="Ссылка на картинку"/>
            <span id="AvatarLink-error" className="popup__error"></span>
        </PopupWithForm>


    )
}
export default EditAvatarPopup;
