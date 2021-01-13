export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <p class="fish__name">${fish.name}</p>
            <p class="fish__species">Species: ${fish.species}</p>
            <p class="fish__location">Harvested: ${fish.location}</p>
            <p class="fish__length">Length: ${fish.length}</p>
            <p class="fish__diet">Diet: ${fish.food}</p>
            <div><img  class="fishCard__img" src="${fish.image}" /></div>
        </section>
    `
}