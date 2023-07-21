function changeTheme() {
  let body = document.body;
  let themeButton = document.getElementById("theme-button");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    themeButton.innerHTML = '<i class="bx bx-moon"></i>';
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    themeButton.innerHTML = '<i class="bx bx-sun"></i>';
  }
}
console.log(changeTheme(), changeTheme);
const hedaer = document.querySelector("header");
window.addEventListener("scroll", function () {
  hedaer.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};
const portfolio = [
  {
    img: "./assets/epbg.png",
    name: "React - SpringBoot fullstack booking application",
    description: "Event Booking App",
  url: "http://www.eventplace.s3-website.us-east-2.amazonaws.com/",
    vercelName: "http://www.eventplace.s3-website.us-east-2.amazonaws.com/",
  },{
    img: "./assets/photoapp.png",
    name: "Photo gallery app using React, redux, mui materials, axios",
    description: "Photo gallery app",
    url: "http://github.com/joga50/Photo-gallery",
    vercelName: "https://photo-gallery-demo.vercel.app/",
  },
  {
    img: "./assets/socialMedia.png",

    name: "Complete social media app using MongoDB, Expresjs, Reactjs, Nodejs",
    description: "MERN, Social media app",
    vercelName:
      "http://github.com/joga50/MERN-SocialMedia-Fullstack-Application",
    url: "http://github.com/joga50/MERN-SocialMedia-Fullstack-Application",
  },
  {
    img: "./assets/springboot-CRUD.png",
    name: "React and java springboot application with MySQL database",
    description: "CRUD, user register and login application",
    vercelName:
      "http://github.com/joga50/React-JavaSpringboot-Fullstack-application",
    url: "http://github.com/joga50/React-JavaSpringboot-Fullstack-application",
  },
  {
    img: "./assets/portfoliorcikandmorty.png",
    name: "React, Tailwindcss/Login-Register-Logout localstorage, Redux Rick and morty cards visor",
    description: "React cards visor",
    vercelName: "https://react-challenge-joga50.vercel.app/",
    url: "http://github.com/joga50/rankcv-react-challenge",
  },
  {
    img: "./assets/csharpatmconsoleapp.png",
    name: "ATM console with C#",
    description: "Basic ATM console with C",
    vercelName: "https://github.com/Joga50/atm-console-c-",
    url: "http://github.com/joga50/atm-console-c-"
  }
];

const html = portfolio
  .map(
    (item) => `
    <div class="project">
    <img src="${item.img}" alt="${item.img}" />
    <div class="project-layer">
      <h3>${item.name}</h3>
      
      <p>${item.description}</p>
      <div>
     <a href="${item.url}" target="_blank"> <i class='bx bxl-github'></i></a>
     
     <a href="${item.vercelName}" target="_blank"><i class='bx bx-link-external'></i></a>
     </div>
      </div>
    </div>
  `
  )
  .join("");

document.getElementById("portfolio-content").innerHTML = html;
