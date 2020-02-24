import * as React from 'react'
import Layout from '../components/Layout'
import CategoryText from '../components/atoms/CategoryText'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'

const IndexPage: NextPage = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <CategoryText>Foo</CategoryText>
        </Layout>
    )
}

fetch('https://yumedeshinou.microcms.io/api/v1/blog', {
    headers: {
        'X-API-KEY': process.env.blog_api_key as string,
    },
})
    .then(res => res.json())
    .then(res => console.log(res))

export default IndexPage
