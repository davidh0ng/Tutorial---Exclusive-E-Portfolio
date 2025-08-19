// service_ozw9njd
// template_hjulza7
// fiG2VO-usTCySp2QC

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
