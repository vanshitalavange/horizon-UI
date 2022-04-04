let btnBaseline = document.querySelector(".baseline");
let btnLeading = document.querySelector(".leading");
let btnStacked = document.querySelector(".stacked");
let snackbarBaseline = document.querySelector(".snackbar-baseline");
let closeSnackbar = document.querySelectorAll(".close-snackbar")
let snackbarLeading = document.querySelector(".snackbar-leading");
let snackbarStacked = document.querySelector(".snackbar-stacked");
snackbarBaseline.style.display = "none"
snackbarLeading.style.display = "none"
snackbarStacked.style.display = "none"

btnBaseline.addEventListener("click", () => {
    snackbarBaseline.style.display = "flex"
})

closeSnackbar[0].addEventListener("click", () => {
    snackbarBaseline.style.display = "none"
})
btnLeading.addEventListener("click", () => {
    snackbarLeading.style.display = "flex"
})

closeSnackbar[1].addEventListener("click", () => {
    snackbarLeading.style.display = "none"
})
btnStacked.addEventListener("click", () => {
    snackbarStacked.style.display = "flex"
})

closeSnackbar[2].addEventListener("click", () => {
    snackbarStacked.style.display = "none"
})