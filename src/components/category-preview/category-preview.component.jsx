import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  PreviewCat,
  TitleCat,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleCat to={title}>{title.toUpperCase()}</TitleCat>
      </h2>
      <PreviewCat>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </PreviewCat>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
