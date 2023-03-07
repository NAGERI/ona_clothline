import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "Shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "Shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "Shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "Shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "Shop/mens",
  },
];
const Directory = () => {
  return (
    <div className="directories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
