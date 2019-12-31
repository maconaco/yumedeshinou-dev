import * as React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Link from 'next/link'
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <p>
            <Link href="/about">
                <a>test</a>
            </Link>
            </p>
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

export default IndexPage;