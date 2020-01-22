import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import LogoContent from '../molecules/LogoContent'
import MenuNav from '../molecules/MenuNav'

type LogoContent = React.ComponentProps<typeof LogoBox>

const HeaderBox = styled.header`

    ${media.lessThan("medium")`
    `};
`


const Logo = styled(LogoContent)`
    height: 168px;
    margin: 20px 0;

    ${media.lessThan("medium")`
        height: 116px;
        margin: 12px 0;
    `};
`

const LogoArea = (props) => (
  <LogoBox {...props}>
  </LogoBox>
)

const MainHeader = () => (
    <HeaderBox>
        <Logo />
        <MenuNav>
            <MenuNav.Item>メンタル</MenuNav.Item>
            <MenuNav.Item>音楽</MenuNav.Item>
            <MenuNav.Item>プログラミング</MenuNav.Item>
            <MenuNav.Item>読みにくい記事</MenuNav.Item>
            <MenuNav.Item>ファッション</MenuNav.Item>
        </MenuNav>
    </HeaderBox>
)

export default MainHeader