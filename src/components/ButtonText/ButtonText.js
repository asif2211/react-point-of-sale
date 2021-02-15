import * as button from './Button.Style'
const ButtonText = ({children,onClick,style}) => {
    return (  
        <button.Container padding={style} onClick={onClick}>
            {children}
        </button.Container>
    );
}
 
export default ButtonText;