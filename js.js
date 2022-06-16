const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

//walidator maila
// /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/1


const showMsg = () => {
if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
    p.textContent = 'Masz bardzo dobre hasło'
    p.style.color = 'lime'
} else if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
    p.textContent = 'Masz dobre hasło'
    p.style.color = 'gold'
} else {
    p.textContent = 'Masz za słabe hasło'
    p.style.color = 'red'
}
// console.log(pass.value.length);
}

const checkPassword = () => {
    if(pass.value !== ``) {
        showMsg()
    } else {
        p.textContent = 'Nie podałeś hasła'
        p.style.color = ''
    }
}

pass.addEventListener('keyup', checkPassword)
