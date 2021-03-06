import styled from 'styled-components';

export const Wrapper = styled.button`
width:100px;
height:40px;
background:rgb(22, 47, 127);
font-size:14px;
display:flex;
justify-content:center;
align-items:center;
outline:none;
border:1px solid #757575;
border-radius:3px;
color:#fff;
cursor: pointer;
&:hover {
    opacity: .8;
  }
  @media (max-width: 400px) {
    width:50px;
    height:46px;

  }
`