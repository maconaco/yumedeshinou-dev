import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import BaseLogo from '../molecules/Logo'
import MenuNav from '../molecules/MenuNav'

const HeaderBox = styled.header`

    ${media.lessThan("medium")`
    `};
`

const Logo = styled(BaseLogo)`
    height: 128px;
    justify-content: center;
    margin: 20px 0;

    ${media.lessThan("medium")`
        height: 116px;
        margin: 12px 0;
    `};
`

const MainHeader = () => (
    <HeaderBox>
        <Logo />
        <MenuNav>
            <MenuNav.Item icon="Drug" href="#mental">メンタル</MenuNav.Item>
            <MenuNav.Item icon="Music" href="#music">音楽</MenuNav.Item>
            <MenuNav.Item icon="Programming" href="#programming">プログラミング</MenuNav.Item>
            <MenuNav.Item icon="Attention" href="#attention">読みにくい記事</MenuNav.Item>
            <MenuNav.Item icon="Fashion" href="#fashion">ファッション</MenuNav.Item>
        </MenuNav>
    </HeaderBox>
)

export default MainHeader