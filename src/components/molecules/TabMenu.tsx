import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import media from "styled-media-query";
import CategoryLabel, { CategoryLink } from '../atmos/CategoryLabel'

type NavProps = {
    children: JSX.Element|JSX.Element[],
};
type MenuNav = React.FunctionComponent<NavProps> & {
    Item: typeof Li,
};

const Nav = styled.nav`
    background-color: #B5DFE8;
    height: 48px;
    padding: 0 276px;

    ${media.lessThan("medium")`
        height: 20px;
        overflow: hidden;
        padding: 0 0 0 12px;
    `};
`;

const Ul = styled.ul`
    font-size: 28px;
    display: flex;
    justify-content: space-between;

    ${media.lessThan("medium")`
        font-size: 14px;
    `};
`;

const Li: React.FunctionComponent = styled((props) => <CategoryLabel as="li" {...props} />)`
    list-style: none;
`;
 
const MenuNav: MenuNav = ({ children }) => (
    <Nav>
        <Ul>
            {children}
        </Ul>
    </Nav>
);

MenuNav.Item = Li;

export default MenuNav;
