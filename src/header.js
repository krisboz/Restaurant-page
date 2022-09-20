import Logo from "./assets/photos/logo.png"
import {makeElement, makePhoto} from "./HTML_helpers"


//All indented elements bind to the topmost unindented element
const headerText = makeElement("div", "",  "class", "headerText")
    const logo = makeElement("div", "", "class", "mainLogo")
        const myLogo = new Image();
        myLogo.src = Logo;
        const logoText = makeElement("p", "Rico Pizza")
    const reviews = makeElement("div", "", "class", "reviews")
        const reviewTop = makeElement("div", "Pizza delivery worldwide", "class", "reviewTop")
        const reviewBottom = makeElement("div", "42min 3.22*", "class", "reviewBottom")
    const  number = makeElement("div", "", "class", "number")
        const phoneNumber = makeElement("div", "097/632-7130", "class", "phoneNumber")
        const phoneDescription = makeElement("div", "Call us now", "class", "phoneDescription")

    logo.appendChild(myLogo)
    logo.appendChild(logoText)
    reviews.appendChild(reviewTop)
    reviews.appendChild(reviewBottom)
    number.appendChild(phoneNumber)
    number.appendChild(phoneDescription)
    headerText.appendChild(logo)
    headerText.appendChild(reviews)
    headerText.appendChild(number)


export default function header() {
    const element = document.createElement("div");
    element.setAttribute("id", "header");
    element.appendChild(headerText)

    
    
    return element
}

//populate the header
//Logo i name    // Pizza Delivery Worldwide, 42min 4.12stars
//number and call us
