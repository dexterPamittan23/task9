const input = document.querySelector('#input');
const btn = document.querySelector('#submitbtn');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
    if(!input.value){
        result.classList.add('error');
        result.innerText='Nickname is Required!'
    } else {
        result.classList.add('accepted');
        result.innerHTML= '<p id="result" class="result">Welcome, '+input.value+' <i class="bi bi-check-circle-fill"></i></p>'
    }
});
