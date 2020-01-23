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

/// const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
/// <h1>Hello world! - user agent: {userAgent}</h1>
/// );

/// Home.getInitialProps = async ({ req }) => {
/// const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
/// return { userAgent };
/// };

export default IndexPage
