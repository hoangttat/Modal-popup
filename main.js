
var btnOpen = document.querySelector('.modal-open')
var iconClose = document.querySelector('.modal-header i')
var btnClose =document.querySelector('.modal-footer__close')
var modal = document.querySelector('.modal')

function hideShowModal(){

  modal.classList.toggle("hidenModal");
}

btnOpen.addEventListener('click',hideShowModal)
btnClose.addEventListener('click',hideShowModal)
modal.addEventListener('click',function(e){
      if(e.target == e.currentTarget){
        hideShowModal()
      }
})
iconClose.addEventListener('click',hideShowModal)

