const fishCollection = [
    {
        name: "Bart",
        species: "fish",
        location: "kitchen sink",
        length: "8ft",
        diet: "meat",
        image: "https://cdn.shopify.com/s/files/1/1529/9657/articles/Blog_Post_Header_81.jpg?v=1579105473"
    },
    {
        name: "Sam",
        species: "buffalo",
        location: "the plains",
        length: "18ft",
        diet: "squirrel",
        image: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/big%20fish.jpg?itok=mTq1G4Bq"
    },
    {
        name: "Red",
        species: "swimmer",
        location: "crater lake",
        length: "2 footballs",
        diet: "hikers",
        image: "https://im.indiatimes.com/content/2019/Dec/plastic-sea-creatures-1_5deceba44936d.jpg"
    },
    {
        name: "Nehemiah",
        species: "jumping",
        location: "jerusalem",
        length: "1 in.",
        diet: "haters",
        image: "https://franceshunter.files.wordpress.com/2010/01/plesiosaur.jpg"
    },
    {
        name: "Nebuchadnezzar",
        species: "fighter",
        location: "the fields",
        length: "1 beast",
        diet: "grass",
        image: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NTEwMTkwNTkzMzIwOTUw/large-freshwater-aquarium-fish.jpg"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}