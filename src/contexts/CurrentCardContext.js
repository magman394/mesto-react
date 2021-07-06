import React from 'react';

export const CurrentCardContext = React.createContext();
export const defaultCard = {
    _id: 
        'Загрузка...'
    ,
    owner: 
        {_id: '0'}
    ,
    name: 
        'Загрузка...'
    ,
    link: 
        'Загрузка...',
    likes:
        {length: '0',
        id: '0'}
    }; 

