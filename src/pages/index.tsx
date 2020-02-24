import * as React from 'react'
import Layout from '../components/Layout'
import CategoryText from '../components/atoms/CategoryText'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <CategoryText>Foo</CategoryText>
        </Layout>
    )
}

export default IndexPage
