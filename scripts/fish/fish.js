export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <p class="fishCard__name">${fish.name}</p>
            <p class="fishCard__species">Species: ${fish.species}</p>
            <p class="fishCard__location">Harvested: ${fish.location}</p>
            <p class="fishCard__length">Length: ${fish.length} in.</p>
            <p class="fishCard__diet">Diet: ${fish.diet}</p>
            <img  class="fishCard__img" src="${fish.image}" />
        </section>
    `
}