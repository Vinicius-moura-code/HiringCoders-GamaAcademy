import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Title = styled.h1`
text-align: center;
font-size: 2rem;
font-family:Arial, Helvetica, sans-serif;
color: #333;
`
export const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
font-family:Arial, Helvetica, sans-serif;
`
export const ListItem = styled.li`
margin: .5rem 0;
background-color: black;
color: #ffff;
padding: .5rem;
`
export const Container = styled.div`
width: 100%;
max-width: 991px;
margin: 0  auto;
`
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  color: #fff;
  text-decoration: none;
`
