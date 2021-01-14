// import { FishList } from './fish/FishList.js'
// import { LocationList } from './locations/LocationList.js'
// import { TipList } from './tips/TipList.js'
// import { QuoteList } from './quotes/QuoteList.js'
import { useFish } from './fish/FishDataProvider.js'

// FishList ()
// LocationList ()
// TipList ()
// QuoteList ()

const fishArray = useFish ()

export const mostHolyFish = () => {

    let holyFish = []
    
    for (const singleFish of fishArray) {
        if (singleFish.length % 3 === 0) {
            holyFish += singleFish
        }
    }

    // return holyFish
    console.log(holyFish)
}

mostHolyFish ()

// export const soldierFish = () => {
//     // 5, 10, 15, 20, 25, etc... fish
//     return soldiers
// }

// export const nonHolyFish = () => {
//     // Any fish not a multiple of 3 or 5
//     return regularFish
// }