import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from "../styles/about.module.scss"
export default function About() {
  return (
    <>
    <Layout>
    <h2 className="newstitle">About</h2>

    <div className={styles.about}>
        <p className={styles.sub}>
            これはaboutページですこれはaboutページですこれはaboutページですこれはaboutページです
        </p>
        <div className={styles.main}>
            <h3>VISION</h3>
            <img src="/img/about.jpg" />
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

