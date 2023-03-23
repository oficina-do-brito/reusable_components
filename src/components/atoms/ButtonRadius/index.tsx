import { ButtonRadiusStyle } from "./styles";

interface IpropsButton {
    text: string;
    color?: string;
}
export const ButtonRadius: React.FC<IpropsButton> = ({ text }) => {
    return (
        <ButtonRadiusStyle className="with-hover" onClick={() => {}}>
            {text}
        </ButtonRadiusStyle>
    );
};
