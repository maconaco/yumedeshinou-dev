import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Footer from './Footer'

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
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/about">
                    <a>About</a>
                </Link>{' '}
                |{' '}
                <Link href="/users">
                    <a>Users List</a>
                </Link>
            </nav>
        </header>
        <Test>
            yumedeshinou
        </Test>
        {children}
        <Footer></Footer>
    </div>
)

export default Layout