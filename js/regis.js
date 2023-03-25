// const submit_button = document.querySelector(".button");
// submit_button.onclick = (e) => {
//     e.preventDefault();
//     const fname = document.getElementById("fname").value;
//     const lname = document.getElementById("lname").value;
//     const email = document.getElementById("email").value;
//     const pass = document.getElementById("pass").value;
//     const cpass = document.getElementById("cpass").value;

//     localStorage.setItem('FirstName', fname);
//     localStorage.setItem('LastName', lname);
//     localStorage.setItem('Email', email);
//     localStorage.setItem('Password', pass);
//     localStorage.setItem('Cpassword', cpass);
//     if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
//         alert(
//             'Opps..!',
//             'input field has no value!',
//             'error'
//         );
//     }
//     else
//     {
//         if(pass.length >= 6 && pass.length <= 20)
//     {
//         if( pass !== cpass){
//             alert(
//                 'Opps..!',
//                 'Password not matching!',
//                 'error'
//             );
//         }
//         else
//         {
//             alert(
//                 'Good job!',
//                 'Register successful!',
//                 'success'
//             );
//             setTimeout(()=>{
//                     location.href='LoginBox.html';
//                     },5000)
//         }
//     }
//     else
//     {
//         alert(
//             'Opps..!',
//             'Input mim six digit password!',
//             'error'
//         );
//     }
//     }


// }

const form = document.querySelector('form');


const storageKey = 'user_data';


function storeData(fname, lname, email, pass, cpass) {

const data = JSON.parse(localStorage.getItem(storageKey)) || [];


data.push({fname, lname, email, pass, cpass});

localStorage.setItem(storageKey, JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
event.preventDefault();

const fname = form.fname.value;
const lname = form.lname.value;
const email = form.email.value;
const pass = form.pass.value;
const cpass = form.cpass.value;

storeData(fname, lname, email, pass, cpass);

alert('Registrasi berhasil!');

console.log(localStorage.getItem(storageKey));
// window.location.href = "login.html";


form.reset();
});
