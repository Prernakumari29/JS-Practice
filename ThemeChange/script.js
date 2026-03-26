let div = document.querySelector("div")
let btn = document.querySelector("button")

if (localStorage.getItem("theme")) {
    div.classList.add(localStorage.getItem("theme"))
}

btn.addEventListener("click", function () {
    if (div.classList.contains("dark")) {
        div.classList.remove("dark")
        div.classList.add("light")
        localStorage.setItem("theme", "light")
    }
    else {
        div.classList.remove("light")
        div.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
})