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


form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(email.value.match(pattern))
    {}
    else{
    document.querySelector('#email_box').style.borderBottom ='1px solid #FF2828';
    email.style.color= '#FF2828';
    document.querySelector('.email_error').style.display='block';
    }

    

   if (password.value !== confirmpassword.value) {
    document.querySelector('.pass_error').style.display='block';
    document.querySelector('#submit_btn').style.animation='effect 0.2s';
    
   }
   else{
    console.log([`FirstName: ${firstname.value}`,`LastName:${lastname.value}`,`Natonality:${nationality.value}`,
    `Email:${email.value}`,`DateBirth:${datebirth.value}`,`MonthBirth:${monthbirth.value}`,`YearhBirth:${yearbirth.value}`,
    `Gender:${radio.value}`,`Password:${password.value}`]);
   }
   document.querySelector('.pass_error-btn').addEventListener('click', (e) =>{
   document.querySelector('.pass_error').style.display='none'; 
   document.querySelector('#submit_btn').style.animation='none'; 
})
    document.querySelector('.email_error-btn').addEventListener('click', (e) =>{
    document.querySelector('.email_error').style.display='none';
    document.querySelector('#email_box').style.borderBottom ='1px solid #F2F2F2';
    email.style.color= '#111111'; 
 })
 
}
)
