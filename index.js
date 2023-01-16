const address = document.querySelector('#address');
const names = document.querySelector('#names');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const picture = document.querySelector('#picture');
const facebook = document.querySelector('#facebook');
const twitter = document.querySelector('#twitter');
const correo = document.querySelector('#correo');

const generateUser = async () => {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const { results } = await response.json();
    const data = results[0];

    picture.src = data.picture.large;
	address.textContent = data.location.street.name;
    names.textContent = data.name.first + " " + data.name.last;
    email.textContent = data.email;
    phone.textContent = data.phone;
	facebook.textContent = "@" + data.name.last;
	twitter.textContent = "/" + data.name.first;
	correo.textContent = data.email;

    correo.href = "mailto:" + data.email;
    email.href = "mailto:" + data.email;
    facebook.href = "https://facebook.com/" + data.name.last;
    twitter.href = "https://twitter.com/" + data.name.first;
    address.href =  "https://google.com/search=" + data.location.street.name;
    phone.href = "tel:" + data.phone;
}

document.addEventListener('DOMContentLoaded', generateUser);



const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});