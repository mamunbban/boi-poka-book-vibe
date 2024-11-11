import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "books/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=> fetch('booksData.json')//Not the right way

      },
      {
        path:"listedBooks",
        element:<ListedBooks></ListedBooks>,
        //wrost way to load some data
        loader:()=> fetch('booksData.json')//Not the right way 

      },
      {
        path: 'dashboard',
        element:<DashBoard></DashBoard>

      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
