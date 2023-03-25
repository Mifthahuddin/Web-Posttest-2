// const login = document.querySelector('.login');
// login.onclick = (e) => {
//     e.preventDefault();
//     const emailAddress = document.getElementById("emailAddress").value;
//     const passWord = document.getElementById("passWord").value;

//     const Email = localStorage.getItem("Email");
//     const Password = localStorage.getItem("Password");

//     if( emailAddress == "" && passWord == ""){
//         alert(
//             'Opps..!',
//             'input field has no value!',
//             'error'
//         );
//     }
//     else
//     {
//         if(emailAddress == Email && passWord == Password){
//             alert(
//                 'Good job!',
//                 'login successful!',
//                 'success'
//             );
//             setTimeout(()=>{
//                 location.href='index.html';
//                 },1000)
//         }else
//         {
//             alert(
//                 'Something is wrong!',
//                 'error'
//             );
//         }
//     };


// };

const form = document.querySelector('form');


const storageKey = 'user_data';


function login(email, pass) {

const data = JSON.parse(localStorage.getItem(storageKey));


const user = data.find((user) => user.email === email && user.pass === pass);


if (user) {
    alert('Login berhasil!');
    window.location.href = "/html/index.html";

} else {
    alert('Username atau password salah!');
}
}


form.addEventListener('submit', (event) => {
event.preventDefault();


const email = form.email.value;
const pass = form.passWord.value;

login(email, pass);

form.reset();
});