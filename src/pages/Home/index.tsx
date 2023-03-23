import { ButtonRadius } from "../../components/atoms/ButtonRadius";
import { HomeStyle } from "./style";

export const Home: React.FC = () => {
  return (
    <HomeStyle data-testid="home-element">
      <ButtonRadius text={"submit"} modo={"background"} />
      <ButtonRadius text={"falar"} modo={"no-background"} />
      <ButtonRadius text={"dizer oi"} modo={"background"} />
      <ButtonRadius text={"scanear"} modo={"no-background"} />
    </HomeStyle>
  );
};
