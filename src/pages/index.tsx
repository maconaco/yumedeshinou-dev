import * as React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

type Blog = {
    contents: BlogContents[]
    totalCount: number
    offset: number
    limit: number
}

type BlogContents = {
    id: string
    createdAt: string
    updatedAt: string
    blog_tittle: string
    blog_text: string
    blog_image: object
}

const IndexPage = ({ contents }: { contents: string }) => (
    <>
        <Layout title="Home | Next.js + TypeScript Example"></Layout>
        <div> {contents} </div>
    </>
)

IndexPage.getInitialProps = async () => {
    const response = await fetch('https://yumedeshinou.microcms.io/api/v1/blog', {
            headers: {
                'X-API-KEY': process.env.BLOG_API_KEY as string,
            },
        }
    )
    const data = (await response.json()) as Blog
    const contents = data.contents.map(contents => contents.createdAt)
    console.log(data)
    console.log(contents)
    return { contents }
}

export default IndexPage
