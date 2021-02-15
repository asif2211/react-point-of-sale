import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
  grid-template-areas: "header header header header" "sidebar main main main" "footer footer footer footer";
  grid-template-columns: .8fr 1fr 1fr 1fr;
  grid-template-rows:  .2fr 3fr;
  font-family:'Pappins', 'san-serif';
`