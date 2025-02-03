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

function Layout({ children }: LoyoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <LogoContainer></LogoContainer>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
        </NavContainer>
        <NavContainer>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </StyledNavLink>
        </NavContainer>
        <NavContainer>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <LogoContainer></LogoContainer>
      </Footer>
    </LayoutComponent>
  );
}
export default Layout;
