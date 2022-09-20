export  function makeElement(type, content, ...attributes) {
let element = document.createElement(type);
if(attributes.length > 0) {
    element.setAttribute(attributes[0], attributes[1])
}
element.textContent = content

if(typeof(child) === "object") {
    element.appendChild(child)
}


return element
}

export function makePhoto() {
    console.log("koka")
}

export function makeList(...articles) {
    const element = makeElement("ul", "")
    articles.forEach(el => {
        const item = makeElement("li")
        let link;
        console.log(el)
        if(el === "Finger food") {
            link = makeElement("a", el, "href", "#finger-food")
        } else {
         link = makeElement("a", el, "href", `#${el.toLowerCase()}`)

        }
        item.appendChild(link)
        element.appendChild(item)
    });

    return element
}