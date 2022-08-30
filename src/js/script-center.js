let buttonBurger = document.querySelector('.menu')

let burgerMenu = document.querySelector('.burger-menu')
let pageBlure = document.querySelector('.page-blure')

let buttonClose = document.querySelector('.close')
let page = document.querySelector('.page')

let buttonChats = document.querySelector('.chats')
let buttonChat = document.querySelector('.chat')
let feedbackClass = document.querySelector('.feedback')
let feedbackButtonCross = document.querySelector('.feedback-cross__button')
let buttonPhones = document.querySelector('.phones')
let buttonPhone = document.querySelector('.phone')
let callClass = document.querySelector('.call')
let callButtonCross = document.querySelector('.call-cross__button')

function closeAllModals() {
  burgerMenu.classList.remove('burger-menu-show')
  pageBlure.classList.remove('blure__page-blure')
  page.classList.remove('page-lock')
  callClass.classList.remove('call-show')
  feedbackClass.classList.remove('feedback-show')
}
// бургер
buttonBurger.addEventListener('click', function () {
  burgerMenu.classList.add('burger-menu-show')
  pageBlure.classList.add('blure__page-blure')
  page.classList.add('page-lock')
})
buttonClose.addEventListener('click', function () {
  closeAllModals()
})
buttonPhones.addEventListener('click', function () {
  callClass.classList.add('call-show')
  pageBlure.classList.add('blure__page-blure')
})
callButtonCross.addEventListener('click', function () {
  closeAllModals()
})
buttonPhone.addEventListener('click', function () {
  closeAllModals()
  callClass.classList.add('call-show')
  pageBlure.classList.add('blure__page-blure')
})
buttonChats.addEventListener('click', function () {
  feedbackClass.classList.add('feedback-show')
  pageBlure.classList.add('blure__page-blure')
})
feedbackButtonCross.addEventListener('click', function () {
  closeAllModals()
})
buttonChat.addEventListener('click', function () {
  closeAllModals()
  feedbackClass.classList.add('feedback-show')
  pageBlure.classList.add('blure__page-blure')
})
pageBlure.addEventListener('click', function () {
  if (pageBlure.classList.contains('blure__page-blure')) {
    closeAllModals()
  }
})

let buttonTextNext = document.querySelector('.text__next')
let aboutTextMore = document.querySelector('.about__text_more')
let aboutTextFull = document.querySelector('.about__text_full')
let aboutTextMoreHidden = document.querySelector('.about__text_more-hidden')

buttonTextNext.addEventListener('click', function (evt) {
  evt.preventDefault()
  aboutTextMore.classList.toggle('about__text_more-show')
  aboutTextFull.classList.toggle('about__text_more-show')
  aboutTextMoreHidden.classList.toggle('about__text_more-show')
  buttonTextNext.classList.toggle('text__next-low')
  buttonTextNext.textContent =
    buttonTextNext.textContent === 'Читать далее'
      ? (buttonTextNext.textContent = 'Скрыть всё')
      : (buttonTextNext.textContent = 'Читать далее')
})
