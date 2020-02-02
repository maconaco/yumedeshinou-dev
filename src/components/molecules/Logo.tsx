import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import LogoImageSvg from '../../../resources/image/svg/logo/logo.svg'
import LogoTextPcSvg from '../../../resources/image/svg/logo/logo-sub-text-pc.svg'
import LogoTextSpSvg from '../../../resources/image/svg/logo/logo-sub-text-sp.svg'

type LogoProps = React.ComponentProps<typeof LogoBox>

const LogoBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`
const LogoImage = styled(LogoImageSvg as any)`
    height: 46px;
    width: 368px;

    ${media.lessThan("medium")`
        height: 6.25vh;
        width: 92.5vw;
    `};

`
const LogoTextPc = styled(LogoTextPcSvg as any)`
    height: 24px;
    margin-top: 20px;
    width: 676px;
    ${media.lessThan("medium")`
        display: none;
    `};
`
const LogoTextSp = styled(LogoTextSpSvg as any)`
    display: none;
    ${media.lessThan("medium")`
        display: block;
        height: 6.5vh;
        margin: 12px 0;
        width: 88.75vw;
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
