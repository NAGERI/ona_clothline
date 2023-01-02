import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, id } = category;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2> {title}</h2>
        <h3> Shop Now</h3>
      </div>
    </div>
  );
};
export default CategoryItem;
