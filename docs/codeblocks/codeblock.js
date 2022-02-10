let btnCopy = document.querySelector(".copy");
let copiedSnackbar = document.querySelector(".copied-snackbar");
const copyText = () => {
  const textArea = document.createElement("textarea");
  textArea.textContent = document.querySelector("#codeblock").textContent;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  displayCopiedMsg();
  
}
const displayCopiedMsg = () => {
    btnCopy.style.display = "none";
     copiedSnackbar.style.display = "block";
     setTimeout(()=>{copiedSnackbar.style.display = "none";
    btnCopy.style.display = "block";
    },1500);
}
btnCopy.addEventListener("click", copyText);