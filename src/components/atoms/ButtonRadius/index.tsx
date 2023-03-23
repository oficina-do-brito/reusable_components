import { ButtonRadiusStyle } from "./styles";

interface IpropsButton {
  modo: string;
  tipo?: any;
  text: string;
  color?: string;
}
export const ButtonRadius: React.FC<IpropsButton> = ({ modo, tipo, text }) => {
  return (
    <ButtonRadiusStyle
      modo={modo}
      className="com-hover"
      type={tipo}
      onClick={() => {}}
    >
      {text}
    </ButtonRadiusStyle>
  );
};
