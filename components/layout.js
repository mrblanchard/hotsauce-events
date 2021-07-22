import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
export default function Layout({title, keywords, description, children}){
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
    <Header />
      <div className={styles.container}>
     {children}
     </div>
     <Footer />
    </div>
    
  )}

Layout.defaultProps = {
  title: 'Hot sauce events | Find any hot sauce event',
  description: 'Find the most prominent hot sauces available at an event',
  keywords: 'hot, sauce'
}
