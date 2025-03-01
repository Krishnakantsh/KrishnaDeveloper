export const Store = [
  {
    project1: {
      htmll: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="project.css">
  <title>Project 1</title>
</head>
<body>
  
  <nav class="navigation">
    <ul>
      <li class="active">
        <a href="#">
          <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
          <span class="text">Home</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
          <span class="text">Profile</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
          <span class="text">Message</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span class="icon"> <ion-icon name="camera-outline"></ion-icon></span>
          <span class="text">Photos</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span class="icon"> <ion-icon name="settings-outline"></ion-icon></span>
          <span class="text">Setting</span>
        </a>
      </li>

      <div class="indicator"></div>

    </ul>
  </nav>


    
  <!-- =========================== scripts  ============================= -->

  <script src="project.js"></script>


  <!-- =========================== ion icon script  ============================= -->

  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>
            </html>`,
      csss: `@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



*{
  font-family: "Poppins", serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root{
  --clr-body:black;
  --clr-indicator:#0078d4;
  --item-width:70px;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--clr-body);
}

.navigation{

position: relative;
width: 400px;
height: 70px;
background: darkorange;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
box-shadow: 2px 2px white;
}

.navigation ul{
  display: flex;
  width: 350px;
}

.navigation ul li{
  position: relative;
  list-style: none;
  width: var(--item-width);
  height: var(--item-width);
  z-index: 1;
}

.navigation ul li a{
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   text-align: center;
   font-weight: 500;
}

.navigation ul li a .icon{
  position: relative;
  display: block;
  line-height: 57px;
  font-size: 1.5rem;
  text-align: center;
  color: var(--clr-body);
  transition: 0.5s;
}

.navigation ul li:hover a .icon,
.navigation ul li.active a .icon{
   transform: translateY(-25px);
   color: #fff;
}

.navigation ul li a .text{
  position: absolute;
  color: var(--clr-body);
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.05rem;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
  top: 1.5rem; 
}

.navigation ul li:hover a .text,
.navigation ul li.active a .text{
   opacity: 1;
   transform: translateY(10px);
   color: #fff;
}

.indicator{
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--clr-indicator);
  border: 6px solid var(--clr-body);
  transition: 0.5s;
}

.indicator::before{
  content: '';
  position: absolute;
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-right-radius: 20px;
  box-shadow: 0 -10px 0 0 var(--clr-body);
}

.indicator::after{
  content: '';
  position: absolute;
  top: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-left-radius: 20px;
  box-shadow:0 -10px 0 0 var(--clr-body);
}



.navigation ul li:nth-child(1).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 0 ));
}
.navigation ul li:nth-child(2).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 1 ));
}
.navigation ul li:nth-child(3).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 2 ));
}
.navigation ul li:nth-child(4).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 3 ));
}
.navigation ul li:nth-child(5).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 4 ));
}

















`,
      jss: `const items = document.querySelectorAll(".navigation li");


items.forEach((i) => {
   i.onclick = function(){
    items.forEach((i)=>{
      i.classList.remove("active");
    });
     
    i.classList.add("active");

   };
          });`,
    },
  },
  {
    project2: {
      htmll: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="project.css">
  <title>Project 2</title>
</head>
<body>
  
  <nav class="navigation">
    <ul>
      <li class="active">
        <a href="#">
          <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
          <span class="text">Home</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
          <span class="text">Profile</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span class="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
          <span class="text">SMS</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span class="icon"> <ion-icon name="camera-outline"></ion-icon></span>
          <span class="text">Photos</span>
        </a>
      </li>

      <li>
        <a href="#">
          <span class="icon"> <ion-icon name="settings-outline"></ion-icon></span>
          <span class="text">Setting</span>
        </a>
      </li>

      <div class="indicator"></div>

    </ul>
  </nav>


    
  <!-- =========================== scripts  ============================= -->

  <script src="project.js"></script>


  <!-- =========================== ion icon script  ============================= -->

  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>
              </html>`,
      csss: `@import url('https://fonts.googleapis.com/css2? family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



*{
  font-family: "Poppins", serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root{
  --clr-indicator:darkorange;
  --item-width:70px;

  --clr-main:#e45826;
  --clr-title:#1b1a17;
  --clr-text:#1b1a17;
  --clr-nav:#fff;
  --clr-body:#e6d5b8;
}

html{
  scroll-behavior: smooth;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--clr-body);
}

.navigation{

position: relative;
width: 400px;
height: 70px;
background: var(--clr-nav);
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
box-shadow: 2px 2px darkorange;
}

.navigation ul{
  display: flex;
  width: 350px;
}

.navigation ul li{
  position: relative;
  list-style: none;
  width: var(--item-width);
  height: var(--item-width);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation ul li a{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.navigation ul li a .icon{
  position: relative;
  display: block;
  line-height: 57px;
  font-size: 1.5rem;
  text-align: center;
  color: var(--clr-text);
  transition: 0.5s;
}

/* .navigation ul li:hover a .icon, */
.navigation ul li.active a .icon{
   /* transform: translateY(-25px); */
   color: #fff;
}

.navigation ul li a .text{
  position: absolute;
  color: var(--clr-body);
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.05rem;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(30px);
}

/* .navigation ul li:hover a .text, */
.navigation ul li.active a .text{
   opacity: 1;
   transform: translateY(20px);
   color: #fff;
}

.indicator{
  position: absolute;
  top: 20%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin:0 10px;
  background: var(--clr-indicator);
  /* border: 6px solid var(--clr-body); */
  transition: 0.5s;
}

.indicator::before{
  content: '';
  position: absolute;
  top: 50%;
  left: -30px;
  width: 30px;
  height: 31px;
  background: transparent;
  border-bottom-right-radius: 30px;
  /* box-shadow: 0 10px 0 0 var(--clr-body); */
  box-shadow:22px 2px 0 0 var(--clr-indicator) ,8px 2px 0 0 var(--clr-indicator),38px 2px 0 0 var(--clr-indicator);
}

.indicator::after{
  content: '';
  position: absolute;
  top: 50%;
  right: -30px;
  width: 30px;
  height: 31px;
  background: transparent;
  border-bottom-left-radius: 30px;
  box-shadow:-22px 2px 0 0 var(--clr-indicator) ,-8px 2px 0 0 var(--clr-indicator),-38px 2px 0 0 var(--clr-indicator);
}



.navigation ul li:nth-child(1).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 0 ));
}
.navigation ul li:nth-child(2).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 1 ));
}
.navigation ul li:nth-child(3).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 2 ));
}
.navigation ul li:nth-child(4).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 3 ));
}
.navigation ul li:nth-child(5).active ~ .indicator{
  transform: translateX(calc(var(--item-width) * 4 ));
}

















`,
      jss: `const items = document.querySelectorAll(".navigation li");


items.forEach((i) => {
   i.onclick = function(){
    items.forEach((i)=>{
      i.classList.remove("active");
    });
     
    i.classList.add("active");

   };
           });`,
    },
  },
  {
    project3: {
      htmll: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="project.css">
  <title>project 3</title>
</head>
<body>

  <label>
    <input type="checkbox" name="checkbox">
    <div class="icon">
      <div class="shadow"></div>
      <div class="iconBx">
        <ion-icon name="power-outline">.</ion-icon>
      </div>
    </div>
  </label>



  <!-- ================================ script ================================ -->
  
  <script src="project.js"></script>
  
  <!-- ================================ ion icons ================================ -->
  
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

  
</body>
                </html>`,
      csss: `*{
           padding: 0;
          margin: 0;
              box-sizing: border-box;
           }


body{
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: #cfd1e1;
  justify-content: center;
  overflow: hidden;
}

label{
  position: relative;
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  cursor: pointer;
}

label::before{
  content: '';
  position: absolute;
  width: 60px;
  height: 4px;
  background-color: #555;
  border-radius: 4px;
}

label input{
  position: absolute;
  appearance: none;
}

label .icon{
  position: absolute;
  width: 60px;
  height: 110%;
  left: 0;
  transition: 0.5s;
}

label input:checked ~ .icon{
  left: 60px;
}

.icon::before{

  content:'';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(#fff, #fff, #e3e3e3);
  filter: blur(1px);
  z-index: 1;
}

.icon::after{

  content:'';
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(#9d9d9d, #9d9d9d, #e3e3e3);
  filter: blur(1px);
  z-index: 1;
}



.icon .shadow{
  position: absolute;
  top: 30px;
  left: -12px;
  width: 84.84px;
  height: 300px;
  background: linear-gradient(180deg , rgba(0,0,0,0.1), transparent , transparent);
  transform-origin: top;
  transform: rotate(315deg);
  pointer-events: none;
}

.icon .iconBx{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(#dbdae1 , #a3aaba);
  box-shadow:
  5px 5px 5px rgba(0,0,0,0.1),
  15px 15px 15px rgba(0,0,0,0.1),
  20px 20px 20px rgba(0,0,0,0.1),
  30px 30px 30px rgba(0,0,0,0.1),
   inset 1px 1px 2px rgba(0,0,0,0.1);
}

.icon .iconBx ion-icon{
  color: #555;
  font-size: 2.25rem;
  --ionicon-stroke-width:50px;
  transition: 0.5s;
}


label input:checked ~ .icon  .iconBx ion-icon{
  color: lightblue;
  filter: drop-shadow(0 0 5px #001eff)
  drop-shadow(0 0 15px #001eff);
             }`,
      jss: `No JavaScript available`,
    },
  },
];
