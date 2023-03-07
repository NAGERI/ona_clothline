import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  BodyCont,
  DirectoryContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyCont>
        <h2>{title}</h2>
        <p> Shop Now</p>
      </BodyCont>
    </DirectoryContainer>
  );
};
export default DirectoryItem;
