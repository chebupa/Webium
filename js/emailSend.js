
const emailButton = document.getElementById("email-button")
const userEmailTextField = document.getElementById("email-field")

emailButton.onclick = (e) => {
    const message = userEmailTextField.value + "%0AЗдравствуйте,%20как%20можно%20с%20вами%20сотрудничать?"
    const contactLink = "https://wa.me/79282136661?text=" + message;
    window.location.href = contactLink
}
