import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Content from './Content/Content';
import SearchBar from './SearchBar/SearchBar';
import SearchResultList from './SearchResultList/SearchResultList';
import { useState } from 'react';


const App = () => {
  const [results, setResults] = useState([])
  console.log(results)
  return (
  <>
  <Header/>
  <Content/>
  <Outlet/>
  <SearchBar setResults={setResults}/>
  <SearchResultList results={results}/>

  </>
  )
} 

export default App
