// cold hard raw fish data. aka sushi.
const fishCollection = [
    {
        name: "Bart",
        species: "fish",
        location: "kitchen sink",
        length: "3",
        diet: "meat",
        image: "https://cdn.shopify.com/s/files/1/1529/9657/articles/Blog_Post_Header_81.jpg?v=1579105473"
    },
    {
        name: "Sam",
        species: "buffalo",
        location: "the plains",
        length: "6",
        diet: "squirrel",
        image: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/big%20fish.jpg?itok=mTq1G4Bq"
    },
    {
        name: "Red",
        species: "swimmer",
        location: "crater lake",
        length: "9",
        diet: "hikers",
        image: "https://im.indiatimes.com/content/2019/Dec/plastic-sea-creatures-1_5deceba44936d.jpg"
    },
    {
        name: "Nehemiah",
        species: "jumping",
        location: "jerusalem",
        length: "4",
        diet: "haters",
        image: "https://franceshunter.files.wordpress.com/2010/01/plesiosaur.jpg"
    },
    {
        name: "Nebuchadnezzar",
        species: "fighter",
        location: "the fields",
        length: "8",
        diet: "grass",
        image: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NTEwMTkwNTkzMzIwOTUw/large-freshwater-aquarium-fish.jpg"
    },
    {
        name: "Nebuchadnezzar",
        species: "fighter",
        location: "the fields",
        length: "5",
        diet: "grass",
        image: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NTEwMTkwNTkzMzIwOTUw/large-freshwater-aquarium-fish.jpg"
    },
    {
        name: "Nebuchadnezzar",
        species: "fighter",
        location: "the fields",
        length: "10",
        diet: "grass",
        image: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NTEwMTkwNTkzMzIwOTUw/large-freshwater-aquarium-fish.jpg"
    },
    {
        name: "Nebuchadnezzar",
        species: "fighter",
        location: "the fields",
        length: "15",
        diet: "grass",
        image: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0NTEwMTkwNTkzMzIwOTUw/large-freshwater-aquarium-fish.jpg"
    },
]

//make a copy of the array as to not modify the original data set

const useFish = () => {
    return fishCollection.slice()
}

//sort out the holy fish, soldier fish, and regular fish
export const sortedFish = () => {

    let holyFish = []
    let soldierFish = []
    let regularFish = []
    
    for (const singleFish of useFish) {
        if (singleFish.length % 3 === 0) {
            holyFish += singleFish
        }
    }

    return holyFish
}