import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
  padding: 20px;
  font-size: 30px;
  `

export const Title = styled.div`
 font-size: 36px;
 color: blueviolet;
 font-weight: bold;
`

/* text-decoration: none; - убрать подчеркивание ссылок */
export const StyledLink = styled(Link)`
text-decoration: none;
font-weight: bold;
color: blue;
`