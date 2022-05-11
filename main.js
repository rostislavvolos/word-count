const textField = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");

textField.addEventListener("input", () => {
  let txt = textField.value.trim().split(/[\s-]/);
  // wordCount.textContent.split(' ').join('-');
  wordCount.textContent = txt.filter((item) => item).length;
  console.log(txt);
});

//   function dashBug() {
//     let txt = textField.value.trim();
//   }

clearBtn.addEventListener("click", () => {
  textField.value = "";
  wordCount.textContent = 0;
});
