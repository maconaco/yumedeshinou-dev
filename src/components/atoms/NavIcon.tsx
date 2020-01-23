import * as React from 'react'
import Link, { LinkProps as RouterLinkProps } from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import NavIconSvg from '../../../resources/image/nav-icon/drug.svg'

type NavProps = React.ComponentProps<typeof NavIcon>

type NavLinkProps = NavProps & RouterLinkProps

const NavIcon = styled.span`
    display: none;

    ${media.lessThan('medium')`
        display: block;
    `};
`

const NavImage = styled((props) => <NavIconSvg {...props} />)`
    display: none;

    ${media.lessThan("medium")`
        height: auto;
        width: 8.75vw;
    `};

`

const NavIconLink: React.FunctionComponent<NavLinkProps> = ({
    href,...props
}) => (
    <Link href={href} passHref>
        <NavIcon {...props}>
            <NavImage />
        </NavIcon>
    </Link>
)
export default NavIcon