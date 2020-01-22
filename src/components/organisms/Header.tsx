import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Logo from '../molecules/Logo'
import MenuNav from '../molecules/MenuNav'

const HeaderBox = styled.header`

    ${media.lessThan("medium")`
    `};
`


const LogoArea = styled((props) => <Logo {...props} />)`
    height: 168px;
    margin: 20px 0;

    ${media.lessThan("medium")`
        height: 116px;
        margin: 12px 0;
    `};
`

const Header = () => (
    <HeaderBox>
        <LogoArea />
        <MenuNav>
            <MenuNav.Item>メンタル</MenuNav.Item>
            <MenuNav.Item>音楽</MenuNav.Item>
            <MenuNav.Item>プログラミング</MenuNav.Item>
            <MenuNav.Item>読みにくい記事</MenuNav.Item>
            <MenuNav.Item>ファッション</MenuNav.Item>
        </MenuNav>
    </HeaderBox>
)

export default Header