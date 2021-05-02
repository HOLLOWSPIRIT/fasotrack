const navMenu = document.getElementById('nav-menu')
const deployableMenu = document.getElementById('deployable-menu')

navMenu.addEventListener("click", () => {
  if (deployableMenu.classList.contains("hide")){
    deployableMenu.classList.remove("hide")
    }

})

const closeDeployableMenu = () => {
  deployableMenu.classList.add("hide")
  deployableMenu.classList.add("top-animation")
}