const main = document.querySelector(".container_group_card");

let img = document.createElement("img");

const card_info = [
  {
    id: 1,
    name: "JavaScript",
    price: 150,
    in_stock: true,
    category: "Kitablar",
    image: "./public/pngegg.png",
    description: "JavaScript Kitabı",
    info: "JavaScript növləri və operatorları, standart daxili obyektləri və metodları olan çoxparadiqmalı, dinamik bir dildir . Onun sintaksisi Java və C dillərinə əsaslanır - bu dillərdən bir çox strukturlar JavaScript-ə də aiddir. JavaScript obyekt prototipləri və sinifləri ilə obyekt yönümlü proqramlaşdırmanı dəstəkləyir",
    btn: "JavaScript",
  },
  {
    id: 2,
    name: "HTML 5",
    price: 100,
    in_stock: false,
    category: "Kitablar",
    image: "./public/b27194c21c7371ddb8243d6d050bb892.png",
    description: "HTML 5 Kitabı",
    info: "HTML (HyperText Markup Language) İnternetin ən əsas tikinti blokudur. Bu veb məzmunun mənasını və strukturunu müəyyən edir . HTML-dən başqa digər texnologiyalar ümumiyyətlə veb səhifənin görünüşünü/təqdimatını (CSS) və ya funksionallığı/davranışını (JavaScript) təsvir etmək üçün istifadə olunur",
    btn: "HTML 5",
  },
  {
    id: 3,
    name: "CSS",
    price: 100,
    in_stock: true,
    category: "Kitablar",
    image: "./public/3ff54c1ccf2ac48e954780808f3c6072.png",
    description: "CSS Kitabı",
    info: "Cascading Style Sheets (CSS) HTML və ya XML-də (SVG, MathML və ya XHTML kimi XML dialektləri daxil olmaqla) yazılmış sənədin təqdimatını təsvir etmək üçün istifadə edilən üslub cədvəli dilidir . CSS elementlərin ekranda, kağızda, nitqdə və ya digər mediada necə göstərilməli olduğunu təsvir edir......",
    btn: "CSS",
  },
];

for (let i = 0; i < 3; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<div class="modal_content">
    
    </div>

    <div class="modal">
    
        <button class="close">&#x2715;</button>
        <div class="modal__content">
        
            <img  src="${
              card_info[i].image
            }" class="modal__img" id="modal__img" alt="logo" >
            <div class="card_info_div">
            <h1 class="modal__title">${card_info[i].name}</h1>
            <h2>${card_info[i].description}</h2>
            
            <p>
            <span class="category">Kataqoriya: ${card_info[i].category}</span>
            </p>
            <p class="info">${card_info[i].info}</p>
            <p class="info_stock"> Məhsul ${
              card_info[i].in_stock ? "Mövcuddur" : "Mövcud deyil"
            }</p>
            <p>
            <span class="price">Qiymət: ${card_info[i].price}</span> ₼ AZN
            </p>
            <div class="btn_group">
            <button class="buy">Sifariş Ver</button>
            <button class="add_to_cart">Səbətə əlavə et</button>
            </div>
            
            </div>
            </div>
        </div>
    </div>
    <div class="card_image">

            <img  class="image_cover" src="${
              card_info[i].image
            }" class="modal__img" id="modal__img" alt="logo" >
            </div> <div class="btn_dvider">
    <button class="open">Open ${card_info[i].btn}</button>
    </div>
            </div>
    `;

  main.appendChild(card);
  const modal = card.querySelector(".modal");
  const openBtn = card.querySelector(".open");
  const closeBtn = card.querySelector(".close");
  const buyBtn = card.querySelector(".buy");
  const imgClose = card.querySelector(".modal__img");
  const imgOpen = card.querySelector(".image_cover");
  const add_to_cart = card.querySelector(".add_to_cart");
  const blurBg = document.getElementById("modal_blur_bg");
  // const modalContent = modal.querySelector(".modal__content");

  openBtn.addEventListener("click", function () {
    modal.style.display = "block";
    blurBg.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    blurBg.style.display = "none";
  });

  buyBtn.addEventListener("click", function () {
    alert("Sifariş verilib");
  });
  imgOpen.addEventListener("click", function () {
    modal.style.display = "block";
    blurBg.style.display = "block";
  });
  imgClose.addEventListener("click", function () {
    modal.style.display = "none";
    blurBg.style.display = "none";
  });

  //  modalContent.addEventListener("click", function (event) {
  //     modal.style.display = "none";
  //     blurBg.style.display = "none";
  //   });

  add_to_cart.addEventListener("click", function () {
    alert("Səbətə əlavə edilib");
  });
}
// -------------------------------------------------------------------------------------------------

// profile container //

const section = document.querySelector(".profile_section");
const blurBg = document.querySelector(".blurBg");

const profileInfo = [
  {
    id: 1,
    image2: "./public/bohemian-man-with-his-arms-crossed_1368-3542.avif",
  },
];

for (let i = 0; i < profileInfo.length; i++) {
  const profile = document.createElement("div");
  profile.classList.add("profile_dvider");
  profile.style.display = "none";

  profile.innerHTML = `
        <button class="close_btn">&#x2715; Close</button>
        <div class="profile_img_divider">
        
<img class="profile_img" src="./public/bohemian-man-with-his-arms-crossed_1368-3542.avif">
        
        </div>
        <div class="profile_info_divider">
            <h2>Lorem</h2>
            <h3>Senior Web Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem voluptas quam excepturi repellendus autem!</p>
        </div>
        <div class="profile_contact">
            <a href="mailto:lorem@gmail.com">lorem@gmail.com</a><br>
            <a href="tel:+994555555555">+994555555555</a>
            <div class="social">
                <img width="30" src="https://img.icons8.com/color/30/instagram-new--v1.png" />
                <img width="30" src="https://img.icons8.com/fluency/30/facebook-new.png" />
                <img width="30" src="https://img.icons8.com/color/30/linkedin.png" />
            </div>
            <div class="btn_contact">
                <label>Name</label>
                <input type="text" placeholder="Name" class="btn_contact">
                <label>Email</label>
                <input type="email" placeholder="Email" class="btn_contact">
                <label>Send Message</label>
                <input type="text" placeholder="Send message" class="btn_contact">
                <br>
                <button class="btn_contact_me">Send</button>
            
            </div>
        </div>
    `;

  const openButton = document.createElement("button");
  openButton.innerText = "Profile Info";
  openButton.classList.add("profile_btn_open");

  section.appendChild(openButton);
  section.appendChild(profile);
  const blurBg = document.getElementById("modal_blur_bg");

  openButton.addEventListener("click", function () {
    profile.style.display = "block";
    blurBg.style.display = "block";
  });

  const closeButton = profile.querySelector(".close_btn");
  closeButton.addEventListener("click", function () {
    profile.style.display = "none";
    blurBg.style.display = "none";
  });
}
