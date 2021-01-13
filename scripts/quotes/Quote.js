export const Quote = (quote) => {
    return `
        <section class="quoteCard">
            <p class="quoteCard__text">${quote.text}</p>
            <p class="quoteCard__author">${quote.author}</p>
            <p class="quoteCard__location">${quote.location}</p>
            <p class="quoteCard__date">${quote.date}</p>
        </section>
    `
}