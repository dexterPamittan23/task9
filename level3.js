const badge = document.querySelector('#badge');
const text = document.querySelector('#Ctxt');
const btn = document.querySelector('#levelUpbtn');

i=1;
btn.addEventListener('click', () => {
    i++;
    badge.innerText = "Level " + i;
    text.innerHTML = '<p id="CartText" class="card-text mb-5 text-muted" style="text-align: center;"><i class="bi bi-arrow-up-circle"></i>  You Leveled Up! Current Level: '+i+'</p>';
});