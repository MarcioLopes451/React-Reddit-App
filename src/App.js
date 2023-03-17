import './App.css';
import Auth0ProviderWithHistory from './auth0Provider';
import { Routes, Route } from 'react-router-dom';
import {SearchBar} from './Components/SearchBar/SearchBar';
import { DropdownMenu } from './Components/Subreddit/Subreddit';
import {HomePost} from './Containers/Posting/Post/HomePost';
import { TwoPost } from './Containers/Posting/Post/TwoPost';



function App() {
  return (
   <Auth0ProviderWithHistory>
    <SearchBar />
    <DropdownMenu />
    <Routes>
      <Route path='/' element={<HomePost />} />
      <Route path='/twopost' element={<TwoPost />} />
    </Routes>
    
   </Auth0ProviderWithHistory>
  );
}

export default App;
