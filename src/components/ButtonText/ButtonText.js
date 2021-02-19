import * as button from './Button.Style'
const ButtonText = ({children,onClick,style,disabled}) => {
    return (  
        <button.Container disabled={disabled}  onClick={onClick} style={style}>
            {children}
        </button.Container>
    );
}
 
export default ButtonText;