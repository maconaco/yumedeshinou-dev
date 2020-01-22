import 'ress'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
`

type Props = {
    Component: any
    pageProps: any
}

const MyApp: React.FunctionComponent<Props> = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
)

export default MyApp
