import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])

    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoreReadList();
        const StoredReadListInt = storedReadList.map(id => parseInt(id));
        //worst way

        const readBookList = allBooks.filter(book => StoredReadListInt.includes(book.bookId))

        setReadList(readBookList)
    },[])
    return (
        <div>
            <h2 className='text-3xl my-6'>this is listed books</h2>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I Read: {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>WishList</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;