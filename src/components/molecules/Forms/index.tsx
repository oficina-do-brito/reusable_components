import { Component } from "react";
import { ButtonRadius } from "../../atoms/ButtonRadius";
import { Input } from "../../atoms/Input";
import { FormsStyle } from "./styles";

interface IpropsForms {
  titulo?: string;
  descricao?: string;
  campos?: Array<string>;
}
export class Forms extends Component<IpropsForms> {
  state = {
    titulo: this.props.titulo ? this.props.titulo : "Criação de X",
    descricao: this.props.descricao ? this.props.descricao : "",
  };
  render() {
    return (
      <>
        <h1>Formulario de {this.state.titulo}</h1>
        <FormsStyle onSubmit={() => {}}>
          <Input type={"email"} nome={"email"} />
          <Input type={"text"} nome={"descricao"} />
          <ButtonRadius modo={"background"} tipo={"submit"} text={"enviar"} />
        </FormsStyle>
      </>
    );
  }
}
