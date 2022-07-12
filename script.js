const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const btn = document.querySelector('.dice');
const text = document.querySelector('.text');

btn.addEventListener('click', getAdvice);

function getAdvice(){
 fetch ('https://api.adviceslip.com/advice')
.then(function (res){
  return res.json()
})

.then(function (data){
  text.innerHTML = data.slip.id;
  
  adviceText.innerHTML = '"' + data.slip.advice + '"';
    
})

} 
getAdvice()
