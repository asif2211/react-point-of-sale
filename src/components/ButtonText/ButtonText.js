import {Wrapper} from './styled'
const ButtonText = ({children,onClick,style,disabled}) => {
    return (  
        <Wrapper disabled={disabled}  onClick={onClick} style={style}>
            {children}
        </Wrapper>
    );
}
 
export default ButtonText;