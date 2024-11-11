import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId,review, image, author, bookName,tags} = book;
    return (
        <Link to={`books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-gray-400 py-8 rounded-2xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className='flex justify-center gap4'>
                    {
                        tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-200 text-green-500">{tag}</button>)
                    }

                </div>
              <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 border-dashed"></div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;