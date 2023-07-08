import { create } from 'zustand'
import { Product } from '@medusajs/medusa'

type ItemBucketState = {
    itemCount : number
    productList : Product[]
    addItem  : (product : Product) => void
    deleteItem : (productId: string) => void
    removeAllItems : () => void
}


const useItemBucketStore = create<ItemBucketState>()((set) => ({
    itemCount : 0,
    productList : [],
    addItem : (product : Product) => set((prevState) => ({ 
        productList: [...prevState.productList, product],
        itemCount: prevState.itemCount + 1 
    })),
    deleteItem: (productId: string) => set((prevState) => ({
        productList: prevState.productList.filter(product => product.id !== productId),
        itemCount: prevState.itemCount - 1
    })),
    removeAllItems : () => set(() => ({
        productList: [],
        itemCount : 0
    }))
}))

export {useItemBucketStore};