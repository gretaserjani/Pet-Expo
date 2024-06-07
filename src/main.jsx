import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import DogsListView from './pages/DogsListView.jsx';
import SingleDogView from './pages/SingleDogsView.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import CatsListView from './pages/CatsListView.jsx';
import SingleCatsView from './pages/SingleCatsView.jsx';
import BirdsListView from './pages/BirdsListView.jsx';
import SingleBirdsView from './pages/SingleBirdsView.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/dogs",
      element: <DogsListView/>,
    },
    {
      path: "/cats",
      element: <CatsListView/>,
    },
    {
      path: "/birds",
      element: <BirdsListView/>,
    },
    {
      path: "/dogs/:dogId",
      element: <SingleDogView/>,
    },
    {
      path: "/cats/:catId",
      element: <SingleCatsView/>,
    },
    {
      path: "/birds/:birdId",
      element: <SingleBirdsView/>,
    },
    {
      path: "/aboutus",
      element: <AboutUs/>,
    },
    {
      path: "/contactus",
      element: <ContactUs/>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

