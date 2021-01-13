const fishCollection = [
    {
        name: "Bart",
        species: "fish",
        location: "kitchen sink",
        length: "8ft",
        diet: "meat",
        food: "crustaceans",
        image: "https://cdn.shopify.com/s/files/1/1529/9657/articles/Blog_Post_Header_81.jpg?v=1579105473"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}