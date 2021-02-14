import styled from "styled-components";

export const Container = styled.div`
 
 grid-area:header;
 -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:  3px 3px 5px 6px #ccc;
  border-radius:0px 0px 5px;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 800px) {
    flex-direction: column;
    border-bottom: none;
    width:100%;
  }
`;
export const Logo = styled.div`
    flex:1;
    width:20%;
    text-align:center;
    line-height:2px;
    padding-top:2px;
    padding-bottom:2px;
`;
export const gap = styled.div`
    flex:2;
    width:80%;
   text-align:center;
`;
export const Profile = styled.div`
    flex:2;
    width:80%;
   text-align:center;
`;
