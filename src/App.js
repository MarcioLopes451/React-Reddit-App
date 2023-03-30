import './App.css';
import Auth0ProviderWithHistory from './auth0Provider';
import {SearchBar} from './Components/SearchBar/SearchBar';
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';


export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState('dark'); 
  
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return ( 
   <Auth0ProviderWithHistory>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div id={theme}>
    <SearchBar />
    <Home />
    </div>
    </ThemeContext.Provider>
   </Auth0ProviderWithHistory>
  );
}

export default App;
