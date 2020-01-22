import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Footer from './Footer'
import MenuNav from '../components/molecules/MenuNav'
import Logo from '../components/molecules/Logo'

type Props = {
    title?: string
}

const Layout: React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title',
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <header>
            <Logo />
            <MenuNav>
                <MenuNav.Item>メンヘラ</MenuNav.Item>
                <MenuNav.Item>音楽</MenuNav.Item>
                <MenuNav.Item>メンヘラ</MenuNav.Item>
                <MenuNav.Item>音楽</MenuNav.Item>
                <MenuNav.Item>メンヘラ</MenuNav.Item>
            </MenuNav>
        </header>
        {children}
        <Footer></Footer>
    </div>
)

export default Layout
