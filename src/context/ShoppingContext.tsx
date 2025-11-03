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
          
    return(

        <ShoppingCardContext.Provider value={{cardItems , handleIncreaseProductQty}}>
            {children}

        </ShoppingCardContext.Provider>

    )
}