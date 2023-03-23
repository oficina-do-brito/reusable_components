import { ButtonRadius } from "../../components/atoms/ButtonRadius";
import { HomeStyle } from "./style";

export const Home: React.FC = () => {
    return (
        <HomeStyle data-testid="home-element">
            <ButtonRadius text={"submit"} />
        </HomeStyle>
    );
};
