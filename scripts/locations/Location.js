export const Location = (location) => {
    return `
        <section class="fishCard">
            <p class="fish__name">${location.city}</p>
            <p class="fish__species">${fish.country}</p>
            <p class="fish__location">${fish.waterBody}</p>
            <div><img  class="fishCard__img" src="${location.image}" /></div>
        </section>
    `
}