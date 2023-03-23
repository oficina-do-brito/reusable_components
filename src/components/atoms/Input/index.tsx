import { useState } from "react";
import { InputStyle } from "./styles";

interface IpropsInput {
  type: string;
  nome: string;
}
export const Input: React.FC<IpropsInput> = ({ type, nome }) => {
  const [state, setState] = useState("");
  return (
    <InputStyle
      type={type}
      name={nome}
      value={state}
      onChange={(event) => {
        setState(event.currentTarget.value);
      }}
    />
  );
};
