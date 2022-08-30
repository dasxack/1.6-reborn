let RepairList = document.querySelector('.repairs')
let repairButtonShow = document.querySelector('.repairs__read_more')

repairButtonShow.addEventListener('click', function (evt) {
  evt.preventDefault()
  RepairList.classList.toggle('repair__show')
  repairButtonShow.classList.toggle('repairs__read__low')
  repairButtonShow.textContent =
    repairButtonShow.textContent === 'Показать все'
      ? (repairButtonShow.textContent = 'Скрыть всё')
      : (repairButtonShow.textContent = 'Показать все')
})
