import Avatar from '../src/images/avatar-image.jpg';
import ProfileEditBotton from '../src/images/edit-botton.svg';
import ProfileAddBotton from '../src/images/add-botton.svg';
import PopupCloseIcon from '../src/images/Close-Icon.svg';
import BoxCardDeleteBotton from '../src/images/delete.png';

function App() {
  return (
    <>
      <div class="page">
        <header class="header">
          <div class="header__logo"></div>
        </header>
        <main class="content">
          <section class="profile">
            <botton class="profile__botton" type="button"><img class="profile__avatar opacity-link opacity-link_avatar" src={Avatar} alt="аватарка"/></botton>
              <div class="profile__profile-info">
                <div class="profile__edit-name">
                  <h1 class="profile__name"></h1>
                  <button type="button" class="profile__edit-botton opacity-link"><img src={ProfileEditBotton} alt="кнопка редактирования"/></button>
                </div>
                <h2 class="profile__profession"></h2>
              </div>
            <button type="button" class="profile__add-botton opacity-link"><img src={ProfileAddBotton} alt="кнопка добавления"/></button>
          </section>
          <section class="elements">

          </section>
        </main>
        <div class="popup" id="popupAutor">
          <div class="popup__container">
            <button type="button" class="popup__close opacity-link"><img src={PopupCloseIcon} alt="кнопка закрытия"/></button>
            <form class="popup__form" name="popup-profile" id="formAutor" novalidate>
              <h2 class="popup__title popup__title_color_black">Редактировать профиль</h2>
              <input name="firstName" id="firstName" type="text" class="popup__input" minlength="2" maxlength="40" required placeholder="Имя"/>
              <span id="firstName-error" class="popup__error"></span>
              <input name="lastName" id="lastName" type="text" class="popup__input" minlength="2" maxlength="200" required placeholder="Профессия"/>
              <span id="lastName-error" class="popup__error"></span>
              <button id="saveAutor" type="submit" class="popup__submit">Сохранить</button>
            </form>
          </div>
        </div>

        <div class="popup" id="popupCard">
          <div class="popup__container">
            <button type="button" class="popup__close opacity-link" id="closeCard"><img src={PopupCloseIcon} alt="кнопка закрытия"/></button>
            <form name="popup-profile" id="formCards" novalidate>
              <h2 class="popup__title popup__title_color_black">Новое место</h2>
              <input name="name" type="text" class="popup__input" minlength="2" maxlength="30" required placeholder="Название" id="inputTitle"/>
              <span id="inputTitle-error" class="popup__error"></span>
              <input name="link" id="inputLink" type="url" class="popup__input" required placeholder="Ссылка на картинку"/>
              <span id="inputLink-error" class="popup__error"></span>
              <button id="saveCard" type="submit" class="popup__submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div class="popup" id="popupImage">
          <div class="popup__image-container">
            <button type="button" class="popup__close popup__close_image opacity-link"><img src={PopupCloseIcon} alt="кнопка закрытия"/></button>
            <img class="popup__image" src="#" alt="фото"/>
            <h2 class="popup__title" id="popupTtl"></h2>
          </div>
        </div>
        <div class="popup" id="popupDelCard">
          <div class="popup__container">
            <form class="popup__form-avatar" id="formDel">
            <h2 class="popup__title popup__title_not_margin">Вы уверены?</h2>
            <button type="button" class="popup__close popup__close_cards opacity-link"><img src={PopupCloseIcon} alt="кнопка закрытия"/></button>
            <button id="deleteCard" type="submit" class="popup__submit popup__submit_mini_margin">Да</button>
            </form>
          </div>
        </div>
        <footer class="footer">
          <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
      </div>
      <div class="popup" id="popupAvatar">
        <div class="popup__container">
          <button type="button" class="popup__close opacity-link" id="closeAvatar"><img src={PopupCloseIcon} alt="кнопка закрытия"/></button>
          <form class="popup__form-avatar" id="formAvatar" novalidate>
            <h2 class="popup__title popup__title_not_margin">Обновить аватар</h2>
            <input name="link" id="AvatarLink" type="url" class="popup__input" required placeholder="Ссылка на картинку"/>
            <span id="AvatarLink-error" class="popup__error"></span>
            <button id="saveAvatar" type="submit" class="popup__submit">Сохранить</button>
          </form>
        </div>
      </div>
      <template id="boxCards">
        <div class="element" id="cardElement">
          <img id="cardLink" class="element__image" src="#" alt="фото"/>
          <div class="element__btn_delete">
            <button id="bottonDel" class="element__btn opacity-link" type="button"><img src={BoxCardDeleteBotton} width="18" height="17" alt="Удалить"/></button>
          </div>
          <div class="element__info">
            <h3 class="element__title" id="cardTitle"></h3>
            <div class="element__likes">
              <button id="likebutton" type="button" class="element__likes element__likes_like-btn"></button>
              <p class="element__likes element__likes_like-count"></p>
            </div>
          </div>
        </div>
      </template>
   </>
  );
}

export default App;
