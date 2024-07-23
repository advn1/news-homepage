window.onload = () => {
    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.close')
    const sidebar = document.querySelector(".sidebar")
    
    close.addEventListener("click", () => {
        sidebar.style.display = "none"

    })

    hamburger.addEventListener("click", () => {
        sidebar.style.display = "flex"
    })
}
