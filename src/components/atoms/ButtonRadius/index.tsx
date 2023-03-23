interface IpropsButton {
    text: string;
    color?: string;
}
export const ButtonRadius: React.FC<IpropsButton> = ({ text }) => {
    return <button onClick={() => {}}>{text}</button>;
};
