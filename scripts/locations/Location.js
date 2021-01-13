export const Location = (location) => {
    return `
        <section class="locationCard">
            <p class="locationCard__city">${location.city}</p>
            <p class="locationCard__country">${location.country}</p>
            <p class="locationCard__waterBody">${location.waterBody}</p>
            <div><img  class="locationCard__img" src="${location.image}" /></div>
        </section>
    `
}