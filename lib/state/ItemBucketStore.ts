import {create} from 'zustand'

interface ItemBucketState {
    itemCount : number
    upCount  : () => void
    downCount : () => void
    removeAllItems : () => void
}


const useItemBucketStore = create<ItemBucketState>()((set) => ({
    itemCount : 0,
    upCount : () => set((prevState) => ({ itemCount: prevState.itemCount + 1 })),
    downCount : () => set((prevState) => ({ itemCount: prevState.itemCount - 1 })),
    removeAllItems : () => set(() => ({itemCount : 0}))
}))

export {useItemBucketStore};