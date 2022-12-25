{
  let title_num = parseInt(localStorage.getItem(localStorage.length * -1 + 1));

  let plus = 0;
  const datanokosi = () => {
    let cnt = 0;
    for (let i = 2000 * title_num; i < 2000 * (1 + title_num); i++) {
      cnt++;
      if (localStorage.getItem(i) != undefined && cnt % 2 == 0) {
        const p_Form = document.createElement("p");
        p_Form.innerHTML =
          "Q" + parseInt(document.getElementsByName("plus").length + 1);
        const newForm = document.createElement("input");
        newForm.type = "text";
        newForm.name = "plus";
        newForm.placeholder = "単語";
        newForm.className = "word";
        newForm.style.width = "172px";
        newForm.value = localStorage.getItem(i);
        newForm.style.marginLeft = "140px";
        document.querySelector("div").appendChild(newForm);

        const deleate_form = document.createElement("button");
        deleate_form.innerText = "削除";
        deleate_form.style.width = "100px";
        deleate_form.style.height = "20px";
        deleate_form.style.marginLeft = "300px";

        const newFormsss = document.createElement("input");
        newFormsss.type = "text";
        newFormsss.style.width = "172px";
        newFormsss.style.marginLeft = "140px";
        document.querySelector("div").appendChild(deleate_form);
        document.querySelector("div").appendChild(newFormsss);
        newFormsss.placeholder = "意味";
        newFormsss.className = "mean";
        newFormsss.value = localStorage.getItem(i + 1);

        const newForms = document.createElement("label");
        newForms.className = "deleate" + plus;
        newForms.style.marginTop = "50px";
        document.querySelector("div").appendChild(newForms);
      }
    }
  };

  const create_input = () => {
    for (let i = 0; i < 2; i++) {
      const newForm = document.createElement("input");
      newForm.type = "text";
      if (i == 0) {
        newForm.placeholder = "単語";
        newForm.className = "word";
        newForm.name = "plus";
      } else {
        const deleate_form = document.createElement("button");
        deleate_form.innerText = "削除";
        deleate_form.style.width = "100px";
        deleate_form.style.height = "20px";
        deleate_form.style.marginLeft = "300px";
        document.querySelector("div").appendChild(deleate_form);
        newForm.placeholder = "意味";
        newForm.className = "mean";
      }
      const newForms = document.createElement("label");
      newForms.className = "deleate" + plus;
      newForms.appendChild(newForm);
      newForms.style.marginTop = "50px";
      document.querySelector("div").appendChild(newForms);
    }
  };

  datanokosi();
  title.textContent = localStorage.getItem(title_num);
  window.addEventListener("DOMContentLoaded", (event) => {
    word_but.style.display = "none";
    word_name.style.display = "none";

    const plus_buttons = document.getElementById("plus");
    plus_buttons.addEventListener("click", () => {
      plus = document.getElementsByName("plus").length;
      console.log(plus);
      if (plus < 1000) {
        create_input();
      } else {
        plus_buttons.style.display = "none";
        alert("もう無理");
      }
    });
  });

  //削除
  const menu = document.getElementsByClassName("menu");

  let word_elements = document.getElementsByClassName("word");
  let mean_elements = document.getElementsByClassName("mean");
  document.getElementById("save").addEventListener("click", () => {
    for (let i = 0; i < word_elements.length; i++) {
      if (
        word_elements.item(i).value != "undefined" &&
        mean_elements.item(i).value != "undefined"
      ) {
        localStorage.setItem(
          i * 2 + 1 + 2000 * title_num,
          word_elements.item(i).value
        );
        localStorage.setItem(
          i * 2 + 2 + 2000 * title_num,
          mean_elements.item(i).value
        );
      }
    }
  });
}
