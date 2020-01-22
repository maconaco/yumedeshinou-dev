import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Footer from './Footer'
import media from "styled-media-query";
import MenuNav from '../components/molecules/TabMenu'

type Props = {
    title?: string
}

const Test = styled.h1`
    font-size: 28px;
    text-align: center;
    color: #9f5cc1;
`;



const Layout: React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title',
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" media="screen" href="src/style.scss" />
        </Head>
        <header>
            <MenuNav>
                <MenuNav.Item>メンヘラ</MenuNav.Item>
                <MenuNav.Item>音楽</MenuNav.Item>
                <MenuNav.Item>メンヘラ</MenuNav.Item>
                <MenuNav.Item>音楽</MenuNav.Item>
                <MenuNav.Item>メンヘラ</MenuNav.Item>
            </MenuNav>
        </header>
        <Test>
            yumedeshinou
        </Test>
        {children}
        <Footer></Footer>
    </div>
)

export default Layout;
