import { useQuote } from './QuoteDataProvider.js'
import { Quote } from "./Quote.js"

export const QuoteList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const quotes = useQuote()

    let travelHTMLRepresentations = ""
    for (const quote of quotes) {
        travelHTMLRepresentations+= Quote(quote)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
            ${travelHTMLRepresentations}
    `
}