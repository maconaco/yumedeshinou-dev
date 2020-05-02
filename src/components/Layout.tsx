import * as React from 'react'
import Head from 'next/head'
import MainHeader from '../components/organisms/MainHeader'
import styled from 'styled-components'
import BlogImage from '../../public/image/blog-image.jpg'

type Props = {
    title?: string
}

const Container = styled.div`
    width: 100%;
`

const Layout: React.FunctionComponent<Props> = ({
    title = 'This is the default title',
}) => (
    <Container>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <MainHeader />
        <img src={BlogImage} />
    </Container>
)

export default Layout
