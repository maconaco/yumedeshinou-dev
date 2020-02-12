import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const CardTittle = styled.span`
    font-size: 2rem;
    color: #454545;

    ${media.lessThan('medium')`
        font-size: 1.6rem;
    `};
`

export default CardTittle
