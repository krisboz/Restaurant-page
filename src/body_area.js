import {makeElement }from "./HTML_helpers"

import capricciosa from "./assets/photos/capricciosa.jpeg"
import margherita from "./assets/photos/margherita.jpeg"
import mexicana from "./assets/photos/mexicana.jpeg"
import cranberry from "./assets/photos/cranberry.jpeg"
import devil from "./assets/photos/devil.jpeg"
import fullyLoaded from "./assets/photos/fully-loaded.jpeg"
import carbonara from "./assets/photos/carbonara.jpeg"
import pepperoni from "./assets/photos/salami.jpeg"

import beefWrap from "./assets/photos/beef-wrap.jpeg"
import chickenWrap from "./assets/photos/chicken-wrap.jpeg"
import chickenQuesa from "./assets/photos/chicken-quesadilla.jpeg"
import vegeQuesa from "./assets/photos/vege-quesadilla.jpeg"
import wingsNormal from "./assets/photos/chicken-wings.jpeg"
import wingsHot from "./assets/photos/hot-wings.jpeg"
import pommes from "./assets/photos/french-fries.jpeg"
import onionRings from "./assets/photos/onion-rings.jpeg"

import greekSalad from "./assets/photos/greek-salad.jpeg"
import ceasarSalad from "./assets/photos/ceasar-salad.jpeg"

//cinnamon-rolls, cranberry-rolls, cranberry, fruity-rolls, pineapple-cinnamon-rolls
import cinnamonRolls from "./assets/photos/cinnamon-rolls.jpeg"
import cranberryRolls from "./assets/photos/cranberry-rolls.jpeg"
import fruityRolls from "./assets/photos/fruity-rolls.jpeg"
import pineCinRolls from "./assets/photos/pineapple-cinnamon-rolls.jpeg"

//coca-cola, fanta,  orangina, red-bull, sprite, ice-tea, water
import cocaCola from "./assets/photos/coca-cola.jpeg"
import fanta from "./assets/photos/fanta.jpeg"
import orangina from "./assets/photos/orangina.jpeg"
import redBull from "./assets/photos/red-bull.jpeg"
import sprite from "./assets/photos/sprite.jpeg"
import iceTea from "./assets/photos/ice-tea.jpeg"
import water from "./assets/photos/water.jpeg"
//Pizza
function makeCard(foto, name, description, price) {
    const element = makeElement("div", "", "class", "food-card");
    //Foto, //ime, //description, //cijena
    const cardPhoto = new Image()
    cardPhoto.src = foto  
    cardPhoto.setAttribute("class", "card-photo")
    const title = makeElement("div", name, "class", "card-title")
    const ingredients = makeElement("div", description, "class", "card-description")
    const cost = makeElement("div", price, "class", "card-price")

    element.appendChild(cardPhoto)
    element.appendChild(title)
    element.appendChild(ingredients)
    element.appendChild(cost)

    return element

}

function pizzaSection() {
    const element = makeElement("div", "", "id", "pizza")
    element.setAttribute("class", "section-container")
    const title = makeElement("div","Pizza",  "class", "section-title")
    const gridContainer = makeElement("div", "", "class", "grid-container")

    element.appendChild(title)
    element.appendChild(gridContainer)

    const pizzaCapr = makeCard(capricciosa, "Capricciosa", "Tomatoes, Ham, Mushrooms", "$13.49")
    const pizzaMarg = makeCard(margherita, "Margherita" ,"Tomatoes, Mozarella", "$11.15")
    const pizzaMex = makeCard(mexicana, "Mexicana", "Etwas, Lecce, Tomaten", "$12.54")
    const pizzaDev = makeCard(devil, "Devil", "Pepperoni, Jalapenos", "$15.14")
    const pizzaFully = makeCard(fullyLoaded, "Fully Loaded", "Bacon, Peperoni, Salsiccia, Ham", "$17.39")
    const pizzaCarb = makeCard(carbonara, "Carbonara", "Proscuttio, Tomatoes, Onion", "$11.45")
    const pizzaPep = makeCard(pepperoni, "Pepperoni", "Pepperoni, Parmesan", "$12.30")
    const pizzaCran = makeCard(cranberry, "Cranberry", "Cranberries, Pineapple, Vanilla Sauce", "$16.00")
    gridContainer.appendChild(pizzaCapr)
    gridContainer.appendChild(pizzaMarg)
    gridContainer.appendChild(pizzaMex)
    gridContainer.appendChild(pizzaDev)
    gridContainer.appendChild(pizzaFully)
    gridContainer.appendChild(pizzaCarb)
    gridContainer.appendChild(pizzaPep)
    gridContainer.appendChild(pizzaCran)
    return element
}

//Finger food
function fingerFood(){
    const element = makeElement("div", "", "id", "finger-food")
    element.setAttribute("class", "section-container")
    const title = makeElement("div","Finger food and snacks",  "class", "section-title")
    const gridContainer = makeElement("div", "", "class", "grid-container")

    element.appendChild(title)
    element.appendChild(gridContainer)


    const fingBeef = makeCard(beefWrap, "Beef Wrap", "Beef Mince, Onions, Joghurt Sauce", "$6.49")
    const fingChicken = makeCard(chickenWrap, "Chicken Wrap", "Chicken Breast, Onions, Carrots, Joghurt Sauce", "$6.45")
    const fingQuesa = makeCard(chickenQuesa, "Chicken Quesadilla", "Chicken, Tortillas, Tomatoes, Onions, Avocado", "$7.99")
    const fingVegeQuesa = makeCard(vegeQuesa, "Vege Quesadilla", "Peppers, Onions, Tortilla, Corn, Tomatoes", "$7.99")
    const fingWings = makeCard(wingsNormal, "Chicken Wings", "Chicken Wings", "$8.15")
    const fingWingsHot = makeCard(wingsHot, "Hot Wings", "Chicken Wings doused in Chilli Sauce", "$8.15")
    const fingPommes = makeCard(pommes, "French Fries", "Potatoes", "$3.50")
    const fingOnionRings = makeCard(onionRings, "Onion Rings", "Deep fried onions", "$4.15")


    gridContainer.appendChild(fingBeef)
   gridContainer.appendChild(fingChicken)
    gridContainer.appendChild(fingQuesa)
    gridContainer.appendChild(fingVegeQuesa)
    gridContainer.appendChild(fingWings)
    gridContainer.appendChild(fingWingsHot)
    gridContainer.appendChild(fingPommes)
    gridContainer.appendChild(fingOnionRings)


    //beef-wrap, chicken-wrap, chicken-quesadilla, chicken-wings, hot-wings, french-fries, onion-rings

    return element
}


//Salads
function salads() {
    const element = makeElement("div", "", "id", "salads")
    element.setAttribute("class", "section-container")
    const title = makeElement("div","Salads",  "class", "section-title")
    const gridContainer = makeElement("div", "", "class", "grid-container")

    element.appendChild(title)
    element.appendChild(gridContainer)

    const saladGreek = makeCard(greekSalad, "Greek Salad", "Olives, Mozarella, Tomatoes, Zucchini", "$8.50")
    const saladCeasar = makeCard(ceasarSalad,"Ceasar Salad", "Chicken, Croutons, Dressing", "$8.50")

    gridContainer.appendChild(saladGreek)
    gridContainer.appendChild(saladCeasar)

    return element
}
//Deserts
function deserts() {
    const element = makeElement("div", "", "id", "deserts")
    element.setAttribute("class", "section-container")
    const title = makeElement("div","Deserts",  "class", "section-title")
    const gridContainer = makeElement("div", "", "class", "grid-container")

    
    element.appendChild(title)
    element.appendChild(gridContainer)

    const desCinRolls = makeCard(cinnamonRolls, "Cinnamon Rolls", "Cinnamon, Rolls, Love", "$4.50")
    const desCranRolls = makeCard(cranberryRolls, "Cranberry Rolls", "Cranberries, Rolls, Love", "$4.50")
    const desFruRolls = makeCard(fruityRolls, "Fruity Rolls", "Fruit, Rolls, Love", "$4.50")
    const desPinCinRolls = makeCard(pineCinRolls, "Pineapple Cinnamon Rolls", "Pineapple, Cinnamon, Rolls", "$4.50")
    const desPizza = makeCard(cranberry, "Cranberry Pizza", "Cranberries, Pizza, Love", "$11.50")

    gridContainer.appendChild(desCinRolls)
    gridContainer.appendChild(desCranRolls)
    gridContainer.appendChild(desFruRolls)
    gridContainer.appendChild(desPinCinRolls)
    gridContainer.appendChild(desPizza)


    return element
}
//Drinks
function drinks() {
    const element = makeElement("div", "", "id", "drinks")
    element.setAttribute("class", "section-container")
    const title = makeElement("div","Drinks",  "class", "section-title")
    const gridContainer = makeElement("div", "", "class", "grid-container")

    
    element.appendChild(title)
    element.appendChild(gridContainer)

    const drinksCola = makeCard(cocaCola, "Coca-Cola", "", "$1.50")
    const drinkFanta = makeCard(fanta, "Fanta", "", "$1.50")
    const drinksOrangina = makeCard(orangina, "Orangina", "", "$1.75")
    const drinksRBull = makeCard(redBull, "Red Bull", "", "$1.75")
    const drinksIceTea = makeCard(iceTea, "Ice Tea", "", "$1.15")
    const drinksWater = makeCard(water, "Water", "", "$1.00")

    gridContainer.appendChild(drinksCola)
    gridContainer.appendChild(drinkFanta)
    gridContainer.appendChild(drinksOrangina)
    gridContainer.appendChild(drinksRBull)
    gridContainer.appendChild(drinksIceTea)
    gridContainer.appendChild(drinksWater)

    return element
}


export default function bodyArea() {
    const element = document.createElement("div");
    element.setAttribute("id", "body_area")

    let pizzaSec = pizzaSection()
    let fingerSec = fingerFood();
    let saladSec = salads()
    let desertSec = deserts()
    let drinkSec = drinks()
    element.appendChild(pizzaSec)
    element.appendChild(fingerSec)
    element.appendChild(saladSec)
    element.appendChild(desertSec)
    element.appendChild(drinkSec)
    return element;
}