import * as React from 'react'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import BaseCategoryText from '../atoms/CategoryText'
import BaseNavIcon, { IconType } from '../atoms/CategoryIcon'

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
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    margin: auto;

    ${media.lessThan('medium')`
        justify-content: space-between;
        width: 81.25vw;
    `};

    ${media.greaterThan('medium')`
        width: 68.5vw;
    `};
`

const Li = styled.li`
    flex-shrink: 0;
    list-style: none;
    padding: 12px 24px;

    ${media.lessThan('medium')`
        padding: .4em .8em;
    `};
`

const CategoryText = styled(BaseCategoryText)`
    ${media.lessThan('medium')`
        display: none;
    `};
`

const CategoryIcon = styled(BaseNavIcon)`
    display: none;

    ${media.lessThan('medium')`
        display: block;
    `};
`

const Item: React.FunctionComponent<ItemProps> = ({
    href,
    icon,
    children,
    ...props
}) => (
    <Link href={href} passHref>
        <Li {...props}>
            <CategoryText>{children}</CategoryText>
            <CategoryIcon type={icon} />
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
