const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

var typed = new Typed(".text", {
  // 'Typed' dengan T besar
  strings: ["Tanpa Perlu Antri", " 5 Menit Langsung Jadi", "Revisi Sepuasnya"], // 'strings' dengan s kecil
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// animasi cart button
const cartBtns = document.querySelectorAll(".cart-button");

cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener("click", function (e) {
    e.preventDefault(); // karena <a>

    cartBtn.classList.add("clicked");

    // Hapus class setelah 3 detik (opsional reset animasi)
    setTimeout(() => {
      cartBtn.classList.remove("clicked");
    }, 3000);

    // Redirect setelah 3.5 detik
    setTimeout(() => {
      const link = cartBtn.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    }, 3500);
  });
});

// animasi cart button

// caoursel
const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

// Hitung width gambar + margin secara akurat
const getFirstImgWidth = () => {
  const style = window.getComputedStyle(firstImg);
  return firstImg.offsetWidth + parseInt(style.marginRight);
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const firstImgWidth = getFirstImgWidth(); // hitung setiap klik agar responsif
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

// Cursor effect
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorBorder = document.querySelector("[data-cursor-border]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorBorder.style.left = `${posX}px`;
  cursorBorder.style.top = `${posY}px`;

  cursorBorder.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// Section FAQ
const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    items.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// Section FAQ
