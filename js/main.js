const BurgerTogler = document.querySelector(".header__btn");
const Navigatsion = document.querySelector(".header__nav");

BurgerTogler.addEventListener("click", function () {
  if (!BurgerTogler.classList.contains("header__btn--open")) {
    BurgerTogler.classList.add("header__btn--open");
    Navigatsion.classList.add("header__nav--open");
  } else {
    BurgerTogler.classList.remove("header__btn--open");
    Navigatsion.classList.add("header__nav--closing");
  }
});
Navigatsion.addEventListener("animationend", function (evt) {
  if (evt.animationName === "close") {
    Navigatsion.classList.remove("header__nav--open");
    Navigatsion.classList.remove("header__nav--closing");
  }
});

$(document).ready(function () {
  $("#submit").click(function () {
    var name = $("#name").val();
    var number = $("#tel").val();
    var password = $("#password").val();
    var password_2 = $("#password_2").val();
    var bio = $("#bio").val();
    var email = $("#email").val();
    if (name == "") {
      alert("Введите ваше имя");
    } else if (tel == "") {
      alert("Введите номер");
    } else if (email == "") {
      alert("Введите ваш E-mail");
    } else if (password == "") {
      alert("Введите ваш пароль");
    } else if (password_2 == "") {
      alert("Повторите пароль");
    } else if (password != password_2) {
      alert("Введенные пароли не совпадают");
    } else if (password.lenght < 4) {
      alert("Пароль должен быть не меньше 4 символов");
    } else {
      alert(
        "Имя:  " +
          name +
          "\n Номер тел:  " +
          tel +
          "\n E-mail:  " +
          email +
          "\n Пароль:  " +
          password +
          "\n О себе:  " +
          bio
      );
    }
  });
});
