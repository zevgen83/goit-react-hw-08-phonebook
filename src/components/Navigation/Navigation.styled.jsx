import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    color: orangered;
  }
`;
