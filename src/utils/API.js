class API  {
  constructor({url, token}) {
    this.url = url
    this.token = token;
  }

  getUserInfo() {
    return fetch(`${this.url}users/me`, {
      headers: 
        this.token
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }
  getAllTasks() {
    return fetch(`${this.url}cards`, {
      headers: 
        this.token
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }
}


const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-24/',
  token: {
    authorization: 'b94e78d1-b2d6-4481-aa74-fc7e4dc8c239',
    "Content-Type": "application/json"
  }
 }
const Api = new API(config);

export default Api;


