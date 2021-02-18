import * as button from './Button.Style'
const ButtonText = ({children,onClick,style}) => {
    return (  
        <button.Container  onClick={onClick} style={style}>
            {children}
        </button.Container>
    );
}
 
export default ButtonText;