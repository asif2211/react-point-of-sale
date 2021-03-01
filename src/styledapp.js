import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "header header header header" "sidebar main main main" "footer footer footer footer";
  grid-template-columns: .8fr 1fr 1fr 1fr;
  grid-template-rows:  .2fr 3fr;
  font-family:'Lato', 'san-serif';
  margin:0px;
  padding:0px;
  box-sizing:border-box;
  font-family:'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;

`