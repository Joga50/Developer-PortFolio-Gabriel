const hedaer = document.querySelector("header");
window.addEventListener("scroll", function () {
  hedaer.classList.toggle("sticky", window.scrollY > 100);
});

const portfolio = [
  {
    img: "./assets/dofus-2022-06-29_12-20-02-Zabotage.png",
    name: "MERN, Social media app",
    description:
      "Complete social media app using MongoDB, Expresjs, Reactjs, Nodejs",
  },
  {
    img: "./assets/dofus-2022-07-01_07-46-48-Zabotage.png",
    name: "CRUD, user register and login application",
    description: "react and java springboot application with MySQL database",
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
     <a href="http//:github.com/joga50"> <i class='bx bxl-github'></i></a>
     
     <a href="#" ><i class='bx bx-link-external'></i></a>
     </div>
      </div>
    </div>
  `
  )
  .join("");

document.getElementById("portfolio-content").innerHTML = html;
