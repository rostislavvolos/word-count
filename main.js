const textField = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");

textField.addEventListener("input", () => {
  let txt = textField.value.trim().split(/[^a-zA-Z]+/);
  wordCount.textContent = txt.length;
  console.log(txt);
});

clearBtn.addEventListener("click", () => {
  textField.value = "";
  wordCount.textContent = 0;
});
