import Logo from "./assets/photos/logo.png"
import { makeElement, makeList } from "./HTML_helpers"

function makeLeft() {
    const element = makeElement("div", "", "class", "left")
        const smallLogo = makeElement("div", "", "class", "smallLogo")
            const myLogo = new Image()
            myLogo.src = Logo;
            myLogo.setAttribute("id", "smallLogo")
            smallLogo.appendChild(myLogo)
        const nav = makeElement("div", "", "class", "nav")
            const navList = makeList("Pizza", "Finger food", "Salads", "Deserts", "Drinks")

            nav.appendChild(navList)
            element.appendChild(smallLogo)
            element.appendChild(nav)

    return element

}

function makeRight() {
    const element =  makeElement("div", "", "class", "right")
        const cart = makeElement("button", "Shopping Cart", "id", "shoppingCart")

        element.appendChild(cart)

        return element
}


export default function navbar() {
    const element = document.createElement("div")
    element.setAttribute("class", "navbar")
    element.appendChild(makeLeft())
    element.appendChild(makeRight())    

    return element;
}

