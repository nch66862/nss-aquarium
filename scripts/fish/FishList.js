import { sortedFish } from './FishDataProvider.js'
import { Fish } from "./Fish.js"

export const FishList = () => {
// debugger
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__fishCards")
    const fishes = sortedFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations+= Fish(fish)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
            ${fishHTMLRepresentations}
        </article>
    `
}