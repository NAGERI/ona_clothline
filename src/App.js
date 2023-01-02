import "../src/categories.styles.scss";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div className="category-container" key={id}>
          <img alt="bg-for-category" />
          <div className="category-body-container">
            <h2> {title}</h2>
            <h3> Shop Now</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
