import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams();
    const data = useLoaderData()

    const id = parseInt(bookId)
    

    const book = data.find(book => book.bookId === id);
    const {bookId: currentBookId, image} = book;
    return (
        <div>
         <h2>Book Details Here: {bookId}</h2>
         <img className='w-36' src={image} alt="" />
         <br />
         <button className="btn mr-3 btn-outline btn-accent">Read</button>
         <button className="btn btn-active btn-accent">Wishlist</button>
        </div>
    );
};

export default BookDetails;