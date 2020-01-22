import * as React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
    height: 120px;
    background-color: #222;
    color: #fff;

    p {
        color: #fff;
    }
`

const Layout: React.FunctionComponent = () => (
    <Footer>
        <p>I&quot;m here to stay (Footer)</p>
    </Footer>
)

export default Layout
