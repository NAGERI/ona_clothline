import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.componenet";

const Directory = ({ categories }) => {
  return (
    <div className="directories-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default Directory;
