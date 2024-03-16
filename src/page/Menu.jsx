import { useParams } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();
  return <div>Menu: {id}</div>;
};

export default Menu;
