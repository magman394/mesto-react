// import React from "react";
// import PopupCloseIcon from '../images/Close-Icon.svg';
// const PopupWithForm = ({popupid, formid, classtype, title, children, buttonid}) => {
//   const [isClose, setIsClose] = React.useState();

//   React.useEffect(() => {
//     setIsClose(false)
//   }, [isClose]);
  
//     return (
//         <div className={`popup${isClose ? ' popup_is-opened' : ''}`} id={popupid} >
//           <div className="popup__container">
//             <button type="button" className="popup__close opacity-link"><img src={PopupCloseIcon} onClick={() => {setIsClose(true)}} alt="кнопка закрытия"/></button>
//             <form className="popup__form" name="popup-profile" id={formid} noValidate>
//               <h2 className={`popup__title ${classtype}`}>{title}</h2>
//               {children}
//               <button id={buttonid} type="submit" className="popup__submit" >Сохранить</button>
//             </form>
//           </div>
//         </div>
//     );
//   }
//   export default PopupWithForm;

import React from "react";
import PopupCloseIcon from '../images/Close-Icon.svg';
const PopupWithForm = ({popupid, formid, classtype, title, children, buttonid}) => {
  const [isClose, setIsClose] = React.useState();

  React.useEffect(() => {
    setIsClose(false)
  }, [isClose]);
  
    return (
        <div className={`popup${isClose ? ' popup_is-opened' : ''}`} id={popupid} >
          <div className="popup__container">
            <button type="button" className="popup__close opacity-link"><img src={PopupCloseIcon} onClick={() => {setIsClose(true)}} alt="кнопка закрытия"/></button>
            <form className="popup__form" name="popup-profile" id={formid} noValidate>
              <h2 className={`popup__title ${classtype}`}>{title}</h2>
              {children}
              <button id={buttonid} type="submit" className="popup__submit" >Сохранить</button>
            </form>
          </div>
        </div>
    );
  }
  export default PopupWithForm;

