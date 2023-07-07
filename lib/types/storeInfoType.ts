type OpeningHours = {
    mondayToFriday : string,
    saturday : string
    sunday : string
}

type StoreInfoType = {
    name : string,
    address: string,
    address2: string,
    openingHours : OpeningHours 
}


export type {OpeningHours, StoreInfoType};