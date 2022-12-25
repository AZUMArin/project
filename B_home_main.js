const opened = document.getElementById("open");
let i2 = 0;
for (let i = 1; i < 1000; i++) {
  if (localStorage.getItem(i) != undefined) {
    i2++;
    /*newForm.style.でcssをつけて */
    const newForm = document.createElement("input");
    newForm.type = "button";
    newForm.value = localStorage.getItem(i);
    newForm.className = "menu";
    newForm.name = i2;

    /*newFormsにはなにもいらない */
    const newForms = document.createElement("label");
    newForms.appendChild(newForm);
    newForms.style.marginTop = "50px";
    document.querySelector("div").appendChild(newForms);
  }
}
const menu = document.getElementsByClassName("menu");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    window.open("A_new_index.html");
    localStorage.setItem(localStorage.length * -1, menu[i].name);
  });
}
