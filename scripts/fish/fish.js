export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <p class="fish__name">${fish.name}</p>
            <p class="fish__species">${fish.species}</p>
            <p class="fish__location">${fish.location}</p>
            <p class="fish__length">${fish.length}</p>
            <p class="fish__diet">${fish.food}</p>
            <div><img  class="fishCard__img" src="${fish.image}" /></div>
        </section>
    `
}