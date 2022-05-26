$(document).ready(function () {
  $("#submit").click(function () {
    var name = $("#name").val();
    var number = $("#number").val();
    var password = $("#password").val();
    var password_2 = $("#password_2").val();
    var bio = $("#bio").val();
    var email = $("#email").val();
    if (name == "") {
      alert("Введите ваше имя");
    } else if (number == "") {
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
          number +
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
