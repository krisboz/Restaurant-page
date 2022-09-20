import { makeElement } from "./HTML_helpers";

function top() {
    const element = makeElement("div", "", "class", "top")
    const left = makeElement("div", "", "class", "left")
    const right = makeElement("div", "", "class", "right")

    const title = makeElement("h1", "More information")
    const aboutUs = makeElement("div", "")
    const aboutUsTitle = makeElement("h4", "About us", "style", "color:#ff553e")
    const aboutUsContent= makeElement("p", "We're a worldwide pizza delivery place, using our proprietary teleportation technology we are able to deliver our pizzas from our single Germany location, anywhere in the world in under 42 minutes. Order and test it yourself!")
    aboutUs.appendChild(aboutUsTitle)
    aboutUs.appendChild(aboutUsContent)
    left.appendChild(title)
    left.appendChild(aboutUs)



    const mapTitle = makeElement("h4", "Our Location", "style", "color:#ff553e")
    const map =  ` <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.7697350032477!2d11.512273715164898!3d48.095385362078495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd924296e2f4b%3A0x59b4002fda0d1c17!2sMachtlfinger%20Str.%2027%2C%2081379%20M%C3%BCnchen!5e0!3m2!1shr!2sde!4v1663687289421!5m2!1shr!2sde" width="350" height="275" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    right.appendChild(mapTitle)
    right.innerHTML += map;



    element.appendChild(left)
    element.appendChild(right)
    //karta. /o nama?, 
    //Veliki naslov More Information
    //svaka narancasti naslov, o nama pa nkei opis
    //nasa lokacija pa karta
    //
    
    return element
}

function bottom() {
    const element = makeElement("div", "", "class", "bottom")
    //made by Kristijan Bozinovic 2022, github link
    const description = makeElement("div", "made by Kristijan Bozinovic, 2022")
    const gitLink = makeElement("div", "")
    const actLink = `<a href="https://github.com/krisboz" target="_blank">Github</a>`
   gitLink.innerHTML += actLink

   element.appendChild(description)
   element.appendChild(gitLink)
   
    return element
}

export default function footer() {
    const element = document.createElement("div");
    element.setAttribute("id", "footer")

    element.appendChild(top())
    element.appendChild(bottom())

    return element
}