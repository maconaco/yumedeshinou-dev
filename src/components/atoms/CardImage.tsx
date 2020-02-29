import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import BlogImage from '../../../resources/image/blog-image.jpg'

const CardImageBox = styled.div`
    height: 140px;
    width: 280px;

    ${media.lessThan('medium')`
        width: 80px;
        height: 80px;
    `};
`

const Image = styled.img`
    border-radius: 10px;

    ${media.lessThan('medium')`
        height: 80px;
        object-fit: cover;
        width: 80px;
    `};
`

const CardImage = () => (
    <CardImageBox>
        <Image src={BlogImage} />
    </CardImageBox>
)

export default CardImage
