import styled from 'styled-components'


export const Container = styled.div`
width:80%;
margin:20px auto;
padding:30px;
box-shadow:1px 1px 1px 1px rgba(0,0,0,0.8);
`
export const Title = styled.div`

    font-size:20px;
    font-weight:600;
    margin-bottom:20px;
    color:#101F58;
    text-transform:uppercase;
    text-align:center;
    font-family:'Pappins', 'san-serif';
`;
export const Form = styled.form`
    width:80%;
`
export const Label = styled.label`
    width:100px;
    color:#757575;
    margin-right:10px;
    font-size:14px;
    font-family:'Pappins', 'san-serif';
    @media (max-width: 400px) {
    font-size:10px;
  }
`
export const Input = styled.input`
   width:80%;
    outline:none;
    border:1px solid #d5dbd9;
    font-size:15px;
    padding:8px 10px;
    border-radius:3px;
    transition:all 0.3s ease;
`
export const InputContainer = styled.div`
    display:flex;
    margin-bottom:15px;
    align-items:center;
`
export const Button = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;