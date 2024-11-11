    const getStoreReadList = ()=>{
        const storedListStr = localStorage.getItem('read-list');
        if(storedListStr){
            const storedList = JSON.parse(storedListStr);
            return storedList;
        }
        else{
            return [];
        }


    }

    const addToStoreReadList = (id)=>{
        const storedList = getStoreReadList();
        if(storedList.includes(id)){
            //already exist dont add it
            console.log(id, 'already exist in the read list');

        }
        else{
            storedList.push(id);
            const storedListStr = JSON.stringify(storedList);
            localStorage.setItem('read-list', storedListStr)
        }
    }

    const getStoreWishList = () =>{
        const storeWishlistStr = localStorage.getItem('wishlist')
        if(storeWishlistStr){
            const storedWishlist = JSON.parse(storeWishlistStr)
            return storedWishlist;
        }
        else{
            return [];
        }
    }

    const addToWishList = (id)=>{
        const storedWishlist = getStoreWishList();
        if(storedWishlist.includes(id)){
            console.log(id,'already exist dont add it');
        }
        else{
            storedWishlist.push(id)
            const storeWishlistStr = JSON.stringify(storedWishlist);
            localStorage.setItem('wishlist', storeWishlistStr)
        }
    }

    export {addToStoreReadList, addToWishList,getStoreReadList,getStoreWishList}