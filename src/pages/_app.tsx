import 'ress'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: 'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;
    },
    html {
        font-size: 62.5%;
    },
    body {
        font-size: 1.6rem;
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
