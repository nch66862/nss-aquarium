const quoteCollection = [
    {
        text: "I have never seen teeth so large",
        author: "Abominable snowman",
        location: "antarctica",
        date: "last century",
    },
    {
        text: "This ain't no fish I want",
        author: "A vegan",
        location: "California",
        date: "yesterday",
    },
    {
        text: "Mmmmmmmmmmm tasty",
        author: "Dad",
        location: "The pier",
        date: "His birthday",
    },
    {
        text: "Peter piper picked a peck of pickled peppers.",
        author: "Peter's wife",
        location: "the pepper farm",
        date: "1930",
    },
    {
        text: "Yo ho yo ho a pirates life for me",
        author: "Jack Sparrow",
        location: "The caribbean",
        date: "2003",
    },
]

export const useQuote = () => {
    return quoteCollection.slice()
}