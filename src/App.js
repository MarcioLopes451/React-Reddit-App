import './App.css';
import Auth0ProviderWithHistory from './auth0Provider';
import {SearchBar} from './Components/SearchBar/SearchBar';




function App() {
  return (
   <Auth0ProviderWithHistory>
    <SearchBar />
   </Auth0ProviderWithHistory>
  );
}

export default App;
