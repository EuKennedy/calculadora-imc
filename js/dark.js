const changeThemeBtn = document.querySelector("#switch");

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("light");
})
