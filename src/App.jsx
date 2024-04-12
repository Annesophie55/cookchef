import Header from "./components/Header";
import Content from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
// import { seedRecipes } from "./data/seed";

// seedRecipes();

function App() {
  return (
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header/> 
        <Content/>
        <Footer/>
      </div>
  )
}

export default App
