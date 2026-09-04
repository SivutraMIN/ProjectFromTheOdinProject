const nav_btn_github = document.getElementById("nav-btn-github")
nav_btn_github.addEventListener("click", () => {
    window.open("https://github.com/SivutraMIN","_blank")
})

const nav_btn_personal_website = document.getElementById("nav-btn-personal-website")
nav_btn_personal_website.addEventListener("click", () => {
    window.open("https://sivutramin.github.io", "_blank")
})

const btn_restaurant_app = document.getElementById("RestaurantApp")
btn_restaurant_app.addEventListener("click", () => {
    window.open("../src/RestaurantApp/index.html", "_blank")
})
