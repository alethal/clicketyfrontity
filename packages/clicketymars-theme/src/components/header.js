import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);



const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #efefef;  
`;




const Title = styled.h2`
        background-image: url(https://img.thesword.com/wp-content/uploads/TheSwordLogo2019.svg);
        width: 100%;
        min-height: 100px;
        background-size: contain;
        background-repeat: no-repeat;
        text-indent: -9999px;
        margin: 0;
       margin-bottom: 5px;
       `;

const Description = styled.h4`
position: absolute; 
display: block;
top: 0;
  text-transform: uppercase;
  margin-top: 15px;
  color: rgba(150, 152, 154, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
