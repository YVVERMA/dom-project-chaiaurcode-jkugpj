const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function(btn) {
  btn.addEventListener('click', (e) => {
    if(e.target.id){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id){
      body.style.backgroundColor = e.target.id
    }
    
  })
})