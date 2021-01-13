import { useLocation } from './LocationDataProvider.js'
import { Location } from "./Location.js"

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

    let travelHTMLRepresentations = ""
    for (const location of locations) {
        travelHTMLRepresentations+= Location(location)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
            ${travelHTMLRepresentations}
    `
}