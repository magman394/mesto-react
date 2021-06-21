// import React from "react";
// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
// import PopupWithForm from './PopupWithForm';


// function App() {

//   return (
//     <>
//       <div className="page">
//         <Header />
//         <Main 
//         onEditProfile="handleEditProfileClick"
//         onAddPlace="handleAddPlaceClick"
//         onEditAvatar="handleEditAvatarClick"
//         />
//         <Footer />
//         <PopupWithForm />
//       </div>
//    </>
//   );
// }

// export default App;
import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App() {

  return (
    <>
      <div className="page">
        <Header />
        <Main 
        onEditProfile="handleEditProfileClick"
        onAddPlace="handleAddPlaceClick"
        onEditAvatar="handleEditAvatarClick"
        />
        <Footer />
        <PopupWithForm />
      </div>
   </>
  );
}

export default App;
