import React from 'react';
import defultLoading from '../images/line.gif';
export const CurrentUserContext = React.createContext();
export const defaultUser = {
    name: 
        'Загрузка...'
    ,
    about: 
        'Загрузка...'
    ,
    avatar: 
        defultLoading
  }; 

