import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import LogoImageSvg from '../../../resources/image/logo.svg'
import LogoTextPcSvg from '../../../resources/image/logo-sub-text-pc.svg'
import LogoTextSpSvg from '../../../resources/image/logo-sub-text-sp.svg'

type LogoProps = React.ComponentProps<typeof LogoBox>

const LogoBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const LogoImage = styled((props) => <LogoImageSvg {...props} />)`
    height: 46px;
    width: 368px;

    ${media.lessThan("medium")`
        height: 36px;
        width: 296px;
    `};

`
const LogoTextPc = styled((props) => <LogoTextPcSvg {...props} />)`
    height: 24px;
    margin-top: 20px;
    width: 676px;
    ${media.lessThan("medium")`
        display: none;
    `};
`
const LogoTextSp = styled((props) => <LogoTextSpSvg {...props} />)`
    display: none;
    ${media.lessThan("medium")`
        display: block;
        height: 40px;
        margin-top: 16px;
        width: 284px;
    `};
`

const Logo: React.FunctionComponent<LogoProps> = (props) => (
    <LogoBox {...props}>
        <LogoImage />
        <LogoTextPc />
        <LogoTextSp />
    </LogoBox>
)

export default Logo