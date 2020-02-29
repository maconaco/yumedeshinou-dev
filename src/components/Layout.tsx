import * as React from 'react'
import Head from 'next/head'
import MainHeader from '../components/organisms/MainHeader'
import CardImage from '../components/atoms/CardImage'
import CardTittle from '../components/atoms/CardTittle'
import CardText from '../components/atoms/CardText'
import styled from 'styled-components'

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
        <CardImage />
        <CardTittle>タイトルタイトルタイトル</CardTittle>
        <CardText>テキストテキストテキスト</CardText>
    </Container>
)

export default Layout
