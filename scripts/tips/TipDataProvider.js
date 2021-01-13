const tipCollection = [
    {
        theTip: "fish will eat until they burst if you keep feeding them",
    },
    {
        theTip: "the colder the water, the better. more oxygen.",
    },
    {
        theTip: "old fish have lived longer than baby fish.",
    },
    {
        theTip: "draw pictures on the glass. Fish appreciate home updates too.",
    },
    {
        theTip: "tuck everyone in before turning on the night light.",
    },
]

export const useTip = () => {
    return tipCollection.slice()
}