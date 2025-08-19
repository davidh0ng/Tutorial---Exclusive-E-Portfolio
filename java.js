// service_ozw9njd
// template_hjulza7
// fiG2VO-usTCySp2QC

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 === 0;
        const offset = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * offset}px, ${y * offset}px)`
    }
}

function toggleDarkMode() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.toggle("dark-theme");
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
  event.preventDefault(event);
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_ozw9njd",
      "template_hjulza7",
      event.target,
      "fiG2VO-usTCySp2QC"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on djhong83@gmail.com."
      );
    });
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}