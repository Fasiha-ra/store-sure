import styled from "styled-components";
export const HeroWrap =styled.div`
background: var(--light-gray);
padding: 30px 0 ;
margin-bottom: 30px;
@media (min-width: 992px){
  margin-bottom: 50px;
}
.textwrap{
  max-width: 649px;
  color: var(--white);
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 20px;
}
.imgwrap {
  position: relative;
  background-image: url(${(props) => props.$bg}) ;
  background-size: cover;
  min-height: 500px; 
  width: 100%;
  background-position: center;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  @media (min-width: 992px){
    flex-direction: row;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(188.68deg, #033026 3.71%, rgba(3, 48, 38, 0.2) 93.78%);
  opacity: 0.5; /* Adjust opacity as needed */
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  color: var(--white);
}

`;