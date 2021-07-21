import Head from 'next/head'

export default function Layout(title, keywords, description, children){
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
     {children}
      
    </div>
  )}

Layout.defaultProps = {
  title: 'Hot sauce events | Find the best sauces',
  description: 'Find the most prominent hot sauces available at an event',
  keywords: 'hot, sauce'
}
