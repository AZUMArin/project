{
  let plus = 0;
  let deleate_num = 0; /*削除 */
  const create_input = () => {
    deleate_num++;
    const p_Form = document.createElement("p");
    p_Form.innerHTML =
      /*Q1,Q2とかをつける */
      "Q" + parseInt(document.getElementsByName("plus").length + 1);
    document.querySelector("div").appendChild(p_Form);

    /*単語と削除と意味をつける */
    for (let i = 0; i < 2; i++) {
      const newForm = document.createElement("input");
      newForm.type = "text";
      if (i == 0) {
        newForm.placeholder = "単語";
        newForm.className = "word";
        newForm.name = "plus";
      } else {
        const deleate_form = document.createElement("button");
        deleate_form.id = deleate_num;
        deleate_form.className = "deleate";
        deleate_form.innerText = "削除";
        deleate_form.style.width = "100px";
        deleate_form.style.height = "20px";
        deleate_form.style.marginLeft = "300px";
        document.querySelector("div").appendChild(deleate_form);
        newForm.placeholder = "意味";
        newForm.className = "mean";
      }
      const newForms = document.createElement("label");
      newForms.appendChild(newForm);
      newForms.className = deleate_num;
      newForms.style.marginTop = "50px";
      document.querySelector("div").appendChild(newForms);
    }
  };

  //toroku
  const toroku = document.getElementById("toroku");
  const word_name = document.getElementById("word_name");
  const word_but = document.getElementById("word_but");
  const main = document.getElementById("main");
  const title = document.getElementById("title");
  main.style.display = "none";
  let enter_name = 0;
  for (let i = 0; i < 2000; i++) {
    if (localStorage.getItem(i) != undefined) {
      enter_name++;
    }
  }
  word_but.addEventListener("click", () => {
    let kaburi = 0;
    for (let j = 0; j < localStorage.length + 1; j++) {
      if (word_name.value === localStorage.getItem(j)) {
        kaburi++;
      }
    }
    if (kaburi > 0) {
      alert("同じ名前ですよ！！");
    } else if (word_name.value.length < 1) {
      //0字の時
      alert("名前を付けて");
    } else {
      word_but.style.display = "none";
      word_name.style.display = "none";
      main.style.display = "block";
      const plus_buttons = document.getElementById("plus");
      plus_buttons.addEventListener("click", () => {
        if (plus < 1000) {
          create_input();
          plus++;
        } else {
          plus_buttons.style.display = "none";
          alert("もう無理");
        }
      });
      localStorage.setItem(enter_name + 1, word_name.value);
      title.textContent = localStorage.getItem(enter_name + 1);
      window.addEventListener("DOMContentLoaded", (event) => {
        word_but.style.display = "none";
        word_name.style.display = "none";
        title.textContent = localStorage.getItem(enter_name + 1);

        const plus_button = document.getElementById("plus");
      });

      //削除
      const deleate_class = document.getElementsByClassName("deleate");
      for (let i = 0; i < deleate_class.length; i++) {
        deleate_class[i].addEventListener("click", () => {
          const deleate_id = document.getElementById(deleate_class[i].id);
          console.log(deleate_id);
        });
      }
      /*単語・削除・ものをおなじname→クリック→削除→データからも削除 */

      let title_num = enter_name + 1;

      let word_elements = document.getElementsByClassName("word");
      let mean_elements = document.getElementsByClassName("mean");
      document.getElementById("save").addEventListener("click", () => {
        for (let i = 0; i < word_elements.length; i++) {
          if (
            word_elements.item(i).value != undefined &&
            mean_elements.item(i).value != undefined
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

      for (let i1 = 1; i1 < word_elements.length * 2; i1 += 2) {
        if (localStorage.getItem(i1 + enter_name * 100) != null) {
          for (let i = 0; i < 2; i++) {
            const newForm = document.createElement("input");
            newForm.type = "text";
            if (i == 0) {
              newForm.placeholder = "単語";
              newForm.className = "word";
              newForm.value = localStorage.getItem(i1 + enter_name * 100);
            } else {
              const deleate_form = document.createElement("button");
              deleate_form.style.width = "37px";
              deleate_form.style.height = "37px";
              deleate_form.innerText = "削除";
              deleate_form.style.paddingLeft = "350px";
              deleate_form.id = "NUM";
              document.querySelector("div").appendChild(deleate_form);
              newForm.placeholder = "意味";
              newForm.value = localStorage.getItem(i1 + 1 + enter_name * 100);
              newForm.className = "mean";
            }
            const newForms = document.createElement("label");
            newForms.appendChild(newForm);
            newForms.style.marginTop = "50px";
            document.querySelector("div").appendChild(newForms);
          }
        }
      }
    }
  });
}
