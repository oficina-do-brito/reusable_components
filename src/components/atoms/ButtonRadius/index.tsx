import { ButtonRadiusStyle } from "./styles";

interface IpropsButton {
  text: string;
  color?: string;
  modo: string;
}
export const ButtonRadius: React.FC<IpropsButton> = ({ text, modo }) => {
  return (
    <ButtonRadiusStyle modo={modo} className="com-hover" onClick={() => {}}>
      {text}
    </ButtonRadiusStyle>
  );
};
