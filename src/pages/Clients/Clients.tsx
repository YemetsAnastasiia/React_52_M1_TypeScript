import React from "react";

import { ClientsPage, Title, StyledLink } from "./styles";

import { Link } from "react-router-dom"

function Clients() {
  return (
    <ClientsPage>
      <Title>Clients</Title>
      <StyledLink  to='facebook'>Go to Facebook page</StyledLink>
      <StyledLink  to='insta'>Go to Instagram page</StyledLink>
      <StyledLink  to='twitter'>Go to Twitter page</StyledLink>
    </ClientsPage>
  );
}

export default Clients;
