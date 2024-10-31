;(function adicionarIcone(){
    // MENU

    const linkMenu = document.createElement("a")
    linkMenu.href = "#"
    linkMenu.target = "#"

    const iconMenu = document.createElement("img")
    iconMenu.src = "icomoon/PNG/menu.png"
    iconMenu.alt = "usuário"

    linkMenu.appendChild(iconMenu)

    const socialIconMenu = document.getElementById("socialIcons")
    socialIconMenu.append(linkMenu)



})()