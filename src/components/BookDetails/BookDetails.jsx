import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList, addToWishList } from '../utility/AddToDb';

const BookDetails = () => {


    const {bookId} = useParams();
    const data = useLoaderData()

    const id = parseInt(bookId)
    

    const book = data.find(book => book.bookId === id);
    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead = (id) =>{
        addToStoreReadList(id);
    }
    const handleWishlist = (id)=>{
        addToWishList(id)
    }
    return (
        <div>
         <h2>Book Details Here: {bookId}</h2>
         <img className='w-36' src={image} alt="" />
         <br />
         <button onClick={ () =>handleMarkAsRead(bookId)} className="btn mr-3 btn-outline btn-accent">Read</button>
         <button onClick={()=> handleWishlist(bookId)} className="btn btn-active btn-accent">Wishlist</button>
        </div>
    );
};

export default BookDetails;