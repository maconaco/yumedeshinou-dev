import * as React from 'react'
import styled from 'styled-components'

import Attention from '../../../resources/image/svg/nav-icon/attention.svg'
import Drug from '../../../resources/image/svg/nav-icon/drug.svg'
import Fashion from '../../../resources/image/svg/nav-icon/fashion.svg'
import Music from '../../../resources/image/svg/nav-icon/music.svg'
import Programming from '../../../resources/image/svg/nav-icon/programming.svg'

export type IconType = keyof typeof icons
type Props = {
    className?: string
    type: IconType
}

const icons = {
    Attention,
    Drug,
    Fashion,
    Music,
    Programming,
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
