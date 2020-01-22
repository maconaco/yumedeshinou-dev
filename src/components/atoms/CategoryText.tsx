import * as React from 'react'
import Link, { LinkProps as RouterLinkProps } from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'

type Props = {
    title?: string
}
type LinkProps = Props & RouterLinkProps

const CategoryLabel = styled.span`
    font-size: 28px;
    color: #fff;

    ${media.lessThan('medium')`
        font-size: 14px;
    `};
`

export default CategoryLabel

export const CategoryLink: React.FunctionComponent<LinkProps> = ({
    title = 'メンヘラ',
    href,
}) => (
    <Link href={href} passHref>
        <CategoryLabel as="a">{title}</CategoryLabel>
    </Link>
)
