class Api  {
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
  changeLikeCardStatus(id, check) {

    if(check === true) {

    return fetch(`${this.url}cards/likes/${id}`,  {
      method: "PUT",
      headers: 
      this.token
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  } else {
    return fetch(`${this.url}cards/likes/${id}`,  {
      method: "DELETE",
      headers: 
      this.token
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }
}
  delmyCard(id) {
    return fetch(`${this.url}cards/${id}`,  {
      method: "DELETE",
      headers: 
      this.token
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  }

}



const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-24/',
  token: {
    authorization: 'b94e78d1-b2d6-4481-aa74-fc7e4dc8c239',
    "Content-Type": "application/json"
  }
 });

export default api;


