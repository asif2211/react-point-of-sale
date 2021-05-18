import React, { useState, useEffect } from "react";
import {
  GridContainer,
  Main,
  Content,
  SubMain,
  Ul,
  Li,
  Product,
  Images,
} from "./styled";
const POS = () => {
  return (
    <GridContainer>
      <Main>
        <Content>
          <SubMain>
            <Ul>
              <Li>
                <Product>
                  <Images src="https://cdn.shopclues.com/images1/thumbnails/97700/320/320/144280655-97700063-1552379299.jpg" />
                  <div>Product name</div>
                  <div>Price</div>
                  <div>Rating</div>
                </Product>
              </Li>
              <Li>
                <Product>
                  <Images src="https://ae01.alicdn.com/kf/Hcac9750bdcb24e22a7fefb31ce98a2bdB/BROWON-New-Arrival-Plus-Size-Mens-Formal-Shirts-Meteor-Print-Long-Sleeve-Blouse-Shirts-for-Men.jpg_Q90.jpg_.webp" />
                  <div>Product name</div>
                  <div>Price</div>
                  <div>Rating</div>
                </Product>
              </Li>
              <Li>
                <Product>
                  <Images src="https://cdn.shopclues.com/images1/thumbnails/97700/320/320/144280655-97700063-1552379299.jpg" />
                  <div>Product name</div>
                  <div>Price</div>
                  <div>Rating</div>
                </Product>
              </Li>
              <Li>
                <Product>
                  <Images src="https://cdn.shopclues.com/images1/thumbnails/97700/320/320/144280655-97700063-1552379299.jpg" />
                  <div>Product name</div>
                  <div>Price</div>
                  <div>Rating</div>
                </Product>
              </Li>
              <Li>
                <Product>
                  <Images src="https://ae01.alicdn.com/kf/Hcac9750bdcb24e22a7fefb31ce98a2bdB/BROWON-New-Arrival-Plus-Size-Mens-Formal-Shirts-Meteor-Print-Long-Sleeve-Blouse-Shirts-for-Men.jpg_Q90.jpg_.webp" />
                  <div>Product name</div>
                  <div>Price</div>
                  <div>Rating</div>
                </Product>
              </Li>
              <Li>
                <Product>
                  <Images src="https://cdn.shopclues.com/images1/thumbnails/97700/320/320/144280655-97700063-1552379299.jpg" />
                  <div>Product name</div>
                  <div>Price</div>
                  <div>Rating</div>
                </Product>
              </Li>
            </Ul>
          </SubMain>
        </Content>
      </Main>
    </GridContainer>
  );
};

export default POS;
