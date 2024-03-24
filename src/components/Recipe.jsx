import styles from "./Recipe.module.scss";
import recipe from '../assets/recette.jpg'
function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imgContainer}>
        <img src={ recipe } alt="recipe" />
      </div>
      <div>
        <h3 className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}>
          Saumon et asperges
        </h3>
      </div>
    </div>
  )
}

export default Recipe;