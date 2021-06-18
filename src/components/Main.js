import Avatar from '../images/avatar-image.jpg';
import ProfileEditBotton from '../images/edit-botton.svg';
import ProfileAddBotton from '../images/add-botton.svg';

import PopupWithForm from './PopupWithForm';

function handleEditAvatarClick() {
  document.querySelector('#popupAvatar').classList.add('popup_is-opened');

}
function handleEditProfileClick() {
  document.querySelector('#popupAutor').classList.add('popup_is-opened');

}
function handleAddPlaceClick() {
  document.querySelector('#popupCard').classList.add('popup_is-opened');

}
function Main() {
    return (
        <main class="content">
          <section class="profile">
            <botton class="profile__botton" type="button" onClick={handleEditAvatarClick}><img class="profile__avatar opacity-link opacity-link_avatar" src={Avatar} alt="аватарка"/></botton>
              <div class="profile__profile-info">
                <div class="profile__edit-name">
                  <h1 class="profile__name"></h1>
                  <button type="button" class="profile__edit-botton opacity-link" onClick={handleEditProfileClick}><img src={ProfileEditBotton} alt="кнопка редактирования"/></button>
                </div>
                <h2 class="profile__profession"></h2>
              </div>
            <button type="button" class="profile__add-botton opacity-link" onClick={handleAddPlaceClick}><img src={ProfileAddBotton} alt="кнопка добавления"/></button>
          </section>
          <section class="elements">
          </section>
        <PopupWithForm popupid="popupAutor" formid="formAutor" buttonid="saveAutor" title="Редактировать профиль" classtype="popup__title_color_black">
          <input name="firstName" id="firstName" type="text" class="popup__input" minlength="2" maxlength="40" required placeholder="Имя"/>
          <span id="firstName-error" class="popup__error"></span>
          <input name="lastName" id="lastName" type="text" class="popup__input" minlength="2" maxlength="200" required placeholder="Профессия"/>
          <span id="lastName-error" class="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm popupid="popupCard" formid="formCards" buttonid="saveCard" title="Новое место" classtype="popup__title_color_black">
          <input name="name" type="text" class="popup__input" minlength="2" maxlength="30" required placeholder="Название" id="inputTitle"/>
          <span id="inputTitle-error" class="popup__error"></span>
          <input name="link" id="inputLink" type="url" class="popup__input" required placeholder="Ссылка на картинку"/>
          <span id="inputLink-error" class="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm popupid="popupDelCard" formid="formDel" buttonid="deleteCard" title="Вы уверены?" classtype="popup__title_not_margin">
          <input name="name" type="text" class="popup__input" minlength="2" maxlength="30" required placeholder="Название" id="inputTitle"/>
          <button id="deleteCard" type="submit" class="popup__submit popup__submit_mini_margin">Да</button>
        </PopupWithForm>
        <PopupWithForm popupid="popupAvatar" formid="closeAvatar" buttonid="saveAvatar" title="Обновить аватар" classtype="popup__title_not_margin">
            <input name="link" id="AvatarLink" type="url" class="popup__input" required placeholder="Ссылка на картинку"/>
            <span id="AvatarLink-error" class="popup__error"></span>
        </PopupWithForm>
        <div class="popup" id="popupImage">
          <div class="popup__image-container">
              <img class="popup__image" src="#" alt="фото"/>
              <h2 class="popup__title" id="popupTtl"></h2>
          </div>
        </div>
        </main>
        
  );
}
export default Main;