let btnCopy = document.querySelectorAll(".copy");
let copiedSnackbar = document.querySelectorAll(".copied-snackbar");
let codeBlock = document.querySelectorAll(".codeblock");
const copyText = (btnIndex) => {
    const textArea = document.createElement("textarea");
    textArea.textContent = codeBlock[btnIndex].textContent;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    displayCopiedMsg(btnIndex);
}
const displayCopiedMsg = (btnIndex) => {
      btnCopy[btnIndex].style.display = "none";
       copiedSnackbar[btnIndex].style.display = "block";
       setTimeout(()=>{copiedSnackbar[btnIndex].style.display = "none";
      btnCopy[btnIndex].style.display = "block";
      },1500);
  }
btnCopy.forEach((copyBtn,btnIndex) => copyBtn.addEventListener("click",()=>copyText(btnIndex)));