import {
  BackgroundImage,
  BodyCont,
  DirectoryContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <DirectoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyCont>
        <h2>{title}</h2>
        <p> Shop Now</p>
      </BodyCont>
    </DirectoryContainer>
  );
};
export default DirectoryItem;
