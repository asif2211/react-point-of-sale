import styled from "styled-components";

export const Container = styled.div`
 
  background-image: url(${(props) => props.backgroundImage});
  height: 150vh;
  max-width: 280px;
  min-width: 80px;
  color: white;
  width: 20%;
  border-radius:5px;
  @media (max-width: 800px) {
    flex-direction: column;
    border-bottom: none;
    max-width: 280px;
    min-width: 80px;
  }
`;
export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 100px;
  border-radius: 50%;
  margin-top: 10px;
`;
export const sidebarHeader = styled.h3`
  font-weight: 500;
  text-align: center;
  margin:10px;
  padding:2px;
  font-family: "Pappins", "san-serif";
  border-radius:5px;
  background-color:rgba(135, 152, 219);
  @media (max-width: 800px) {
    flex-direction: column;
    border-bottom: none;
    max-width: 100px;
    min-width: 80px;
    font-size:10px;
    background-color:none
  }
`;
export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  width: 9rem;
  margin-left: 20px;
  margin-bottom: 20px;
  font-family: "Pappins", "san-serif";
  font-size: 12px;
  border-bottom: 2px solid;
  border-color: ${(p) =>
    p.isselected ? "rgba(225,225,225)" : "rgba(135, 152, 219)"};
  @media (max-width: 850px) {
    flex-direction: column;
    width: 50%;
    border-bottom: none;
    font-size: 10px;
  }
`;
export const menuContainer = styled.div``;
export const Icon = styled.div`
  flex: 1;
  margin-bottom: 10px;
`;
export const Text = styled.div`
  color: ${(p) => (p.isselected ? "rgba(225,225,225)" : "rgba(135, 152, 219)")};
  text-align: left;
  flex: 3;
  margin-bottom: 10px;
`;
