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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstname = form.elements.firstname.value;
    const lastname = form.elements.lastname.value;
    const nationality = form.elements.nationality.value;
    const email = form.elements.email.value;
    const datebirth = form.elements.datebirth.value;
    const monthbirth = form.elements.monthbirth.value;
    const yearbirth = form.elements.yearbirth.value;
    const radio = form.elements.radio.value;
    const pass = form.elements.password.value;
    const confirmpassword = form.elements.confirmpassword.value;

   if (pass !== confirmpassword) {
    document.querySelector('.pass_error').style.display='block'; 
   }
   else{
    console.log([`FirstName: ${firstname}`,`LastName:${lastname}`,`Natonality:${nationality}`,
    `Email:${email}`,`DateBirth:${datebirth}`,`MonthBirth:${monthbirth}`,`YearhBirth:${yearbirth}`,
    `Gender:${radio}`,`Password:${pass}`]);
   }
   document.querySelector('.pass_error-btn').addEventListener('click', (e) =>{
   document.querySelector('.pass_error').style.display='none';  
})
 
}
)
