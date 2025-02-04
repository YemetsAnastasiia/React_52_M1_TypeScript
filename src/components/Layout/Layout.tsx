import { LoyoutProps } from "./types";

import {
  LayoutComponent,
  Header,
  LogoContainer,
  NavContainer,
  StyledNavLink,
  Main,
  Footer,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";

function Layout({ children }: LoyoutProps) {
const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
          {/*   второй способ перехода на главную страницу при клике на логотип 
          с использованием (useNavigate )*/}
          <LogoContainer onClick={() => navigate('/')}></LogoContainer>{" "}
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
          <StyledNavLink
            to='/lesson14'
            style={
              ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
            }>
            Lesson 14
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
      {/*   первый способ перехода на главную страницу при клике на логотип */}
      <Link to="/">
          <LogoContainer></LogoContainer>{" "}
        </Link>
      </Footer>
    </LayoutComponent>
  );
}
export default Layout;
