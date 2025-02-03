import React from "react";

import { ClientsPage, Title } from "./styles";

import { Link } from "react-router-dom"

function Clients() {
  return (
    <ClientsPage>
      <Title>Clients</Title>
      <Link  to='facebook'>Go to Facebook page</Link>
      <Link  to='insta'>Go to Instagram page</Link>
      <Link  to='twitter'>Go to Twitter page</Link>
    </ClientsPage>
  );
}

export default Clients;
