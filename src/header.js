import Logo from "./assets/photos/logo.png"

function makeTop() {
    const element = document.createElement("div")
    element.setAttribute("class", "top")
    const logo = document.createElement("div")
    logo.setAttribute("class", "logo_name")
    const review = document.createElement("div")
    review.setAttribute("class", "review")
    const number = document.createElement("div")
    number.setAttribute("class", "number")


    element.appendChild(logo)
    element.appendChild(review)
    element.appendChild(number)

    const myLogo = new Image();
    myLogo.src = Logo
    myLogo.setAttribute("id", "topLogo")
    logo.appendChild(myLogo)

    return element
}



    



function makeSticky() {

    const element = document.createElement("div")
    element.setAttribute("class", "sticky")
    //smaller logo, //Pizza,  //finger food //salads //deserts  //drinks 
    const smallLogo = document.createElement("div")
    const menu = document.createElement("div")

    element.appendChild(smallLogo)
    element.appendChild(menu)
    return element

}

export default function header() {
    const element = document.createElement("div");
    element.setAttribute("id", "header");

    element.appendChild(makeTop())
    element.appendChild(makeSticky())
    
    
    return element
}

//populate the header
//Logo i name    // Pizza Delivery Worldwide, 42min 4.12stars
//number and call us


//Sticky part, 
