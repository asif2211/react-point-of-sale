import styled from 'styled-components'

export const Container = styled.div`
    grid-area:main;
    background:#F8F8F8;
    overflow-wrap: break-word;
    @media (max-width: 800px) {
    font-size:10px;
    width: 100%;
   grid-area:main
  }
    @media (max-width: 400px) {
    font-size:10px;
    width: 100%;
   grid-area:main
  }
`