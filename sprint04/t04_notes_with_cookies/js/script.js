function addCookie() {
  let text = document.getElementById("input_field");
  let str = text.value;
  let expires = "expires=";

  if (str == "" || str == null || str == undefined) {
    alert('It\'s empty. Try to input something in "Text input"');
    return;
  }

  let date = new Date();
  date.setDate(date.getDate() + 30);
  expires += date + ";";

  document.cookie =
    "str=" + getCookie("str") + "/" + str + ";" + expires + " path=/;";

  updateList();
}

function getCookie(name) {
  let nameEqual = name + "=";
  let allCookies = document.cookie.split(";");
  for (let i = 0; i < allCookies.length; i++) {
    let c = allCookies[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEqual) == 0)
      return c.substring(nameEqual.length, c.length);
  }
  return null;
}

function updateList() {
  let list = document.cookie;
  let output = document.getElementById("archive");
  if (document.cookie == null || document.cookie == "str=") {
    output.innerHTML = "[Empty]";
    return;
  }
  let arr = list.split("/");
  output.innerHTML = "";
  for (let i = 1; i < arr.length; i++) {
    output.innerHTML += "--> " + arr[i] + "<br>";
  }
}

function clearCookies() {
  let answer = confirm("Are you sure?");
  if (answer) {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      let date = new Date();
      date.setDate(date.getDate() + 30);
      document.cookie = name + `=; expires=${date}; path=/`;
    }
    updateList();
  }
}

updateList();
