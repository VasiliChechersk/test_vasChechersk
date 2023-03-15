const select = document.querySelector('#year')
let inner = ''
for (let i = 1920; i <= 2020; i++) {
    inner += `<option>${i}</option>`
}
select.innerHTML = inner

const select2 = document.querySelector('#date')
let innerDate = ''
for (let i = 1; i <= 31; i++) {
    innerDate += `<option>${i}</option>`
}
select2.innerHTML = innerDate

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const select3 = document.querySelector('#month')
let innerMonth = ''
for (let el of month) {
    innerMonth += `<option>${el}</option>`
}
select3.innerHTML = innerMonth


const national = ['American', 'Indian', 'Russian', 'Ukrainian', 'Mexican',
    'Canadian', 'Iranian', 'Japanese', 'Chinese', 'Jew', 'Swedish', 'Norwegian', 'German', 'English', 'French']
const selectNation = document.querySelector('#nationality')
let innerNation = ''
for (let el of national) {
    innerNation += `<option>${el}</option>`
}
selectNation.innerHTML = innerNation


const form = document.forms.form
const firstname = form.elements.firstname;
const lastname = form.elements.lastname;
const nationality = form.elements.nationality;
const email = form.elements.email;
const datebirth = form.elements.datebirth;
const monthbirth = form.elements.monthbirth;
const yearbirth = form.elements.yearbirth;
const radio = form.elements.radio;
const password = form.elements.password;
const confirmpassword = form.elements.confirmpassword;

email.addEventListener('change', (e) => {
    const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (!email.value.match(patternEmail)){
        document.querySelector('#email_box').style.borderBottom = '1px solid #FF2828';
        email.style.color = '#FF2828';
        document.querySelector('.email_error').style.display = 'block';
        document.querySelector('.inp_btn').type = 'button';
    }else{
        document.querySelector('.email_error').style.display = 'none';
        document.querySelector('#email_box').style.borderBottom = '1px solid #F2F2F2';
        email.style.color = '#111111';
        document.querySelector('.inp_btn').type='submit';
 
    }
   
})
password.addEventListener('change', (e) => {
    const patternPassword = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}/
    if (!password.value.match(patternPassword)) { 
       document.querySelector('#inputpassword_box').style.borderBottom = '1px solid #FF2828';
        password.style.color = '#FF2828';
        document.querySelector('.pass_error-input').style.display = 'block';
        document.querySelector('.inp_btn').type = 'button'; 
    }else{
    
    document.querySelector('.pass_error-input').style.display = 'none';
    document.querySelector('#inputpassword_box').style.borderBottom = '1px solid #F2F2F2';
    password.style.color = '#111111'; 
    document.querySelector('.inp_btn').type='submit';
    } 
})

confirmpassword.addEventListener('change', (e) => {
    if (password.value !== confirmpassword.value) {
      document.querySelector('#confirmpassword_box').style.borderBottom = '1px solid #FF2828';
        confirmpassword.style.color = '#FF2828';
        document.querySelector('.pass_error-confirm').style.display = 'block';
        document.querySelector('.inp_btn').type = 'button';  
     }
    else {
       document.querySelector('.pass_error-confirm').style.display = 'none';
    document.querySelector('#confirmpassword_box').style.borderBottom = '1px solid #F2F2F2';
    confirmpassword.style.color = '#111111';
    document.querySelector('.inp_btn').type='submit'; 
    }
})



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
        console.log([`FirstName: ${firstname.value}`, `LastName:${lastname.value}`, `Natonality:${nationality.value}`,
        `Email:${email.value}`, `DateBirth:${datebirth.value}`, `MonthBirth:${monthbirth.value}`, `YearhBirth:${yearbirth.value}`,
        `Gender:${radio.value}`, `Password:${password.value}`]);
    
}
)
