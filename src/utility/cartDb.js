const getStoredCartList=()=>{
    const storedListStr=localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList=JSON.parse(storedListStr);
            return storedList;
           
    }
    else{
    return [];
}
};

const addToStoredCartList=(id)=>{
        const storedList=getStoredCartList();
        if(storedList.includes(id)){
                console.log(id,'already exists in the cart list');
        }
        else{
            storedList.push(id);
            const storedListStr=JSON.stringify(storedList); 
            localStorage.setItem('cart-list',storedListStr);
        }
};

const getStoredWishList=()=>{
    const storedWishListStr=localStorage.getItem('wish-list');
    if(storedWishListStr){
        return JSON.parse(storedWishListStr);
            
    }
    else{
    return [];
}
};

const addToStoredWishList=(id)=>{
const storedWishList=getStoredWishList();
        if(storedWishList.includes(id)){
                console.log(id,'already exists in the wish list');
        }
        else{
            storedWishList.push(id);
            const storedWishListStr=JSON.stringify(storedWishList); 
            localStorage.setItem('wish-list',storedWishListStr);
        }
};
export {addToStoredCartList,addToStoredWishList,getStoredCartList,getStoredWishList}