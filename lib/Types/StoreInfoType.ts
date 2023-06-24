interface StoreInfoType {
    name : string,
    address : string,
    address2 : string,
    openingHours : OpeningHours
}

interface OpeningHours {
    mondayToFriday : string,
    saturday : string,
    sunday : string
}

export default StoreInfoType;