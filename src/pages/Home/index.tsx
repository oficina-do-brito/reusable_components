import { ButtonRadius } from "../../components/atoms/ButtonRadius";
import { Forms } from "../../components/molecules/Forms";
import { HomeStyle } from "./style";

export const Home: React.FC = () => {
  return (
    <HomeStyle data-testid="home-element">
      <ButtonRadius text={"submit"} modo={"background"} />
      <ButtonRadius text={"falar"} modo={"no-background"} />
      <hr />
      <Forms />
    </HomeStyle>
  );
};
