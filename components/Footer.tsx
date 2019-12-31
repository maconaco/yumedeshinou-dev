import * as React from 'react'
import styled from 'styled-components'

type Props = {
    title?: string
}

const Footer = styled.footer`
    height: 120px;
    background-color: #222;
    color: #fff;

    p {
        color: #fff;
    }
`;

const Layout: React.FunctionComponent<Props> = ({
    children,
    title = 'This is the default title',
}) => (
    <div>
        <Footer>
            <p>I'm here to stay (Footer)</p>
        </Footer>
    </div>
)

export default Layout