import { createContext, useState } from "react";
import { useContext } from "react";

interface ShoppingCardProvider {
    children : React.ReactNode
}

interface cardItem {
    id : number ;
    qty : number ;
}

interface shoppingCardContext {
    cardItems : cardItem[] ;
    handleIncreaseProductQty : (id : number) => void
    handleDecreaseProductQty : (id : number) => void
    getProductQty : (id : number) => number ;
}


export const useShoppingCardContext = () => {
    return useContext(ShoppingCardContext)
}

export const ShoppingCardContext  = createContext({} as shoppingCardContext);

export function ShppingCardProvider({children} :  ShoppingCardProvider){

    const [cardItems , setCardItems] = useState<cardItem[]>([])

    const handleIncreaseProductQty = (id : number) => {

        setCardItems(currentItem => {
            let selectedItem = currentItem.find(item => item.id == id)

            if(selectedItem == null){
                return [...currentItem , {id : id , qty : 1}]
            }else{
                return currentItem.map(item => {
                    if(item.id == id){
                        return {...item ,
                              qty : item.qty + 1}
                    }else{
                        return item
                    }
                })
            }
        })

    }

    const handleDecreaseProductQty = (id : number) => {

        setCardItems(currentItem => {
            let selectedItem = currentItem.find(item => item.id = id)

            if(selectedItem?.qty === 1 ){
                return currentItem.filter(item  => item.id !== id)
            }else{
                return currentItem.map(item => {
                    if(item.id == id ){
                        return {...item , qty : item.qty - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const getProductQty = (id : number) => {
        return cardItems.find(item => item.id == id)?.qty || 0
    }
          
    return(

        <ShoppingCardContext.Provider value={{cardItems , handleIncreaseProductQty , handleDecreaseProductQty , getProductQty}}>
            {children}

        </ShoppingCardContext.Provider>

    )
}