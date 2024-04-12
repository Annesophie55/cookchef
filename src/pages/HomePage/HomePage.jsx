import Loading from "../../components/Loading/Loading";
import styles from "./HomePage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { useState } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
  <div className="flex-fill container p-20 d-flex flex-column">
    <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
    <div className={`card flex-fill mb-20 p-20 d-flex flex-column ${styles.contentCard}`}>
      <div className={`d-flex d-row justify-content-center align-item-center my-30 ${styles.searchBar}`}>
        <i className="fa-solid fa-magnifying-glass mr-15"></i>
        <input onInput={handleInput} className="flex-fill" type="text" placeholder="Rechercher"/>
      </div>
      { (isLoading) ? <Loading/> : 
          (<div className={styles.grid}>
       
          { recipes.filter( (r) =>r.title.toLowerCase().startsWith(filter)).map((r) => (
          <Recipe key={r.id} title={r.title} image={r.image}/>
          ))}
      </div>)}
  
    </div>
  </div>
  );
}

export default HomePage;