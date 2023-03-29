import './App.css';
import Auth0ProviderWithHistory from './auth0Provider';
import {SearchBar} from './Components/SearchBar/SearchBar';
import Home from './Components/Home/Home';




function App() {
  return (
   <Auth0ProviderWithHistory>
    <div>
    <SearchBar />
    <Home />
    </div>
   </Auth0ProviderWithHistory>
  );
}

export default App;
