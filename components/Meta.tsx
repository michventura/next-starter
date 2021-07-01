import Head from 'next/head'

type MetaProps = {
  title: string
  description: string
}

const Meta = ({title, description}: MetaProps) => (
  <Head>
    <meta charSet="UTF-8" key="charset" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1"
      key="viewport"
    />
    <meta name="description" content={description}></meta>
    <title>{title}</title>
  </Head>
)

export default Meta
