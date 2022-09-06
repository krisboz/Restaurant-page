import container from "./setContent"
import header from "./header"
import navbar from "./navbar"
import bodyArea from "./body_area"
import footer from "./footer"
import './style.css';

export default function initialLoad() {
    document.body.appendChild(container())
    let content = document.querySelector("#content")
    content.appendChild(header())
    content.appendChild(navbar("kurčina"))
    content.appendChild(bodyArea())
    content.appendChild(footer())

    return content
}


//populate the header
//Logo i name    // Pizza Delivery Worldwide, 42min 4.12stars
//number and call us


//Sticky part, 
//smaller logo, //Pizza,  //finger food //salads //deserts  //drinks 