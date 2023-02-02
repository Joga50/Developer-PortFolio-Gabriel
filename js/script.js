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
    img: "./assets/socialMedia.png",
    name: "MERN, Social media app",
    description:
      "Complete social media app using MongoDB, Expresjs, Reactjs, Nodejs",
    url: "React-JavaSpringboot-Fullstack-application",
  },
  {
    img: "./assets/springboot-CRUD.png",
    name: "CRUD, user register and login application",
    description: "React and java springboot application with MySQL database",
    url: "MERN-SocialMedia-Fullstack-Application",
  },
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
     <a href="http://github.com/joga50/${item.url}" target="_blank"> <i class='bx bxl-github'></i></a>
     
     <a href="#" ><i class='bx bx-link-external'></i></a>
     </div>
      </div>
    </div>
  `
  )
  .join("");

document.getElementById("portfolio-content").innerHTML = html;
