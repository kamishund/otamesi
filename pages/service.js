import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from "../styles/service.module.scss"
export default function Service() {
  return (
    <>
    <Layout>
    <h2 className="newstitle">service</h2>

    <div className={styles.about}>
        <p className={styles.sub}>
            これはserviceページですこれはserviceページですこれはserviceページですこれはserviceページです
        </p>
        <div className={styles.main}>
            <h3>SERVICE</h3>
            <img src="/img/service.jpg" />
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。 
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。 
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。 
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。 
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。 
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。 
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。 
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。 
            </p>
        </div>
    </div>
    </Layout>
    </>
  )
}

