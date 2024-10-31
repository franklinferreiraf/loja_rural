;(function adicionarIcone(){

    "use-stric"
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
    // FIM DO MENU

    // LOGIN
    const linkLogin = document.createElement("a")
    linkLogin.href = "#"
    linkLogin.target = "#"

    const iconLogin = document.createElement("img")
    iconLogin.src = "icomoon/PNG/user.png"
    iconLogin.alt = "user"

    linkLogin.appendChild(iconLogin)

    const socialIconLogin = document.getElementById("socialLogin")
    socialIconLogin.append(linkLogin)


})()