import { NavButton } from "../types/Nav";

const Button = ({name, clickHandler}: NavButton) => {
    return (
        <button type="button" onClick={clickHandler}>{name}</button>
    )
}

export default Button;