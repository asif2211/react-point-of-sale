import {LinkButton} from './styled'
const ButtonText = ({children,onClick,style,disabled}) => {
    return (  
        <LinkButton disabled={disabled}  to={onClick} style={style}>
            {children}
        </LinkButton>
    );
}
 
export default ButtonText;