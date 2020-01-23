import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import CategoryText, { CategoryLink } from '../atoms/CategoryText'
// import NavIcon, { NavIconLink }  from '../atoms/NavIcon'

type NavProps = {
    children: JSX.Element | JSX.Element[]
}
type MenuNav = React.FunctionComponent<NavProps> & {
    Item: typeof Li
    // Icon: typeof Li   NavIconをここに入れたい
}

const Nav = styled.nav`
    background-color: #b5dfe8;
    height: 48px;
    padding: 0 276px;

    ${media.lessThan('medium')`
        height: 20px;
        overflow: hidden;
        padding: 0 0 0 12px;
    `};
`

const Ul = styled.ul`
    font-size: 28px;
    display: flex;
    justify-content: space-between;

    ${media.lessThan('medium')`
        font-size: 14px;
    `};
`

const Li: React.FunctionComponent = styled(props => (
    <CategoryText as="li" {...props} />
))`
    list-style: none;
    ${media.lessThan("medium")`
        display: none;
    `}
`

// const Icon: React.FunctionComponent = styled(props => (
   // <NavIcon as="li" {...props} />
// ))`
   // list-style: none;
  //  display: none;
  //  ${media.lessThan("medium")`
      //  display: block;
   // `}
// `

const MenuNav: MenuNav = ({ children }) => (
    <Nav>
        <Ul>{children}</Ul>
    </Nav>
)

// ulタグにliタグとしてNavIconを呼び出したい

MenuNav.Item = Li
// MenuNav.Icon = li にしたい

export default MenuNav
