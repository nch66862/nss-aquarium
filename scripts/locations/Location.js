export const Location = (location) => {
    return `
        <section class="locationCard">
        <p class="locationCard__city">City: ${location.city}</p>
        <p class="locationCard__country">Country: ${location.country}</p>
        <p class="locationCard__waterBody">Body of Water: ${location.waterBody}</p>
        <img  class="locationCard__img" src="${location.image}" />
        </section>
            `
}