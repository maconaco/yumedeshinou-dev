import * as React from 'react'
import styled from 'styled-components'

import Attention from '../../../public/image/svg/nav-icon/attention.svg'
import Drug from '../../../public/image/svg/nav-icon/drug.svg'
import Fashion from '../../../public/image/svg/nav-icon/fashion.svg'
import Music from '../../../public/image/svg/nav-icon/music.svg'
import Programming from '../../../public/image/svg/nav-icon/programming.svg'

const icons = {
    Attention,
    Drug,
    Fashion,
    Music,
    Programming,
}

export type IconType = keyof typeof icons
type Props = {
    className?: string
    type: IconType
}

const Icon: React.FunctionComponent<Props> = ({ type, ...props }) => {
    const Icon: any = icons[type]
    return <Icon {...props} />
}

const CategeoryIcon = styled(Icon)`
    height: 28px;
    width: 28px;
`

export default CategeoryIcon
