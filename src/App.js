import './App.css';
import Auth0ProviderWithHistory from './auth0Provider';
import { Routes } from 'react-router-dom';
import {SearchBar} from './Components/SearchBar/SearchBar';
import { DropdownMenu } from './Components/Subreddit/Subreddit';


function App() {
  return (
   <Auth0ProviderWithHistory>
    <SearchBar />
    <DropdownMenu />
    <Routes>
   
    </Routes>
    
   </Auth0ProviderWithHistory>
  );
}

export default App;
