import * as React from 'react'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import BaseCategoryText from '../atoms/CategoryText'
import BaseNavIcon, { IconType } from '../atoms/NavIcon'

type NavProps = {
    children: JSX.Element | JSX.Element[]
}
type ItemProps = React.ComponentProps<typeof Li> & {
    href: LinkProps['href']
    icon: IconType
}
type MenuNav = React.FunctionComponent<NavProps> & {
    Item: typeof Item
}

const Nav = styled.nav`
    background-color: #b5dfe8;
    padding: 0 120px;
`
const Ul = styled.ul`
    display: flex;
    justify-content: center;
`
const Li = styled.li`
    flex-shrink: 0;
    list-style: none;
    padding: 0 24px;

    ${media.lessThan("medium")`
        padding: 8px 24px;
    `};
`
const CategoryText = styled(BaseCategoryText)`
    ${media.lessThan("medium")`
        display: none;
    `};
`
const NavIcon = styled(BaseNavIcon)`
    display: none;
    ${media.lessThan("medium")`
        display: block;
    `};
`

const Item: React.FunctionComponent<ItemProps> = ({ href, icon, children, ...props }) => (
    <Link href={href} passHref>
        <Li {...props}>
            <CategoryText>{children}</CategoryText>
            <NavIcon type={icon} />
        </Li>
    </Link>
)
const MenuNav: MenuNav = ({ children }) => (
    <Nav>
        <Ul>{children}</Ul>
    </Nav>
)
MenuNav.Item = Item

export default MenuNav
