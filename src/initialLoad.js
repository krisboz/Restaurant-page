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
    content.appendChild(navbar())
    content.appendChild(bodyArea())
    content.appendChild(footer())



    return content
}
