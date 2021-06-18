
import BoxCardDeleteBotton from '../images/delete.png';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div class="page">
        <Header />
        <Main />
        <Footer />
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
      </div>
   </>
  );
}

export default App;
