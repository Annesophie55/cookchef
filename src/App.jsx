import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Admin from './pages/Admin/Admin';
import styles from "./App.module.scss";
import { useState } from "react";
// import { seedRecipes } from "./data/seed";

// seedRecipes();

function App() {
  const [page, setPage ] = useState('homepage');
  return (
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header setPage={setPage}/> 
        {page === 'homepage' && <HomePage />}
        {page === 'admin' && <Admin />}
        <Footer/>
      </div>
  )
}

export default App
