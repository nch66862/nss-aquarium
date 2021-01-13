const fishCollection = [
    {
        name: "Bart",
        species: "fish",
        location: "",
        length: "",
        diet: "",
        food: "crustaceans",
    }
]

export const useFish = () => {
    return fishCollection.slice()
}