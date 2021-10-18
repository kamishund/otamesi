import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import { client } from "../libs/client";
import Card from '../components/card'
export default function Home({ news }) {
  return (
    <>
    <Layout>
      <div className="main">
        <h2>
          We Like Programming<br/>
          We Like Marcketting
        </h2>
      </div>

      <section className="concept">
         <div className="concept_text">
          <h3>About</h3>
          <p className="sub">
          sub title 
          </p>
          <p className="text">
           これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。 これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。 これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。 これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。
          </p>
          <Link href="/about">
          <a className="btn btn-flat"><span>Read more</span></a>
           </Link>
         </div>
         <div className="concept_img">
          <img src="/img/about.jpg"/>
         </div>
      </section>

      <section className="service">
        <h3>Service</h3>
        <p className="sub">sub title</p>
        <p className="text">
          これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。 これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。 これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。 これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。
        </p>
        <Link href="/service">
          <a className="btn btn-flat"><span>Read more</span></a>
        </Link>
      </section>

      

      <section className="news">
      <h3>News</h3>
      <ul>
        {news.map((news) => (
          <Card key={news.id} news={news} />
        ))}
      </ul>
      <Link href="/news">
          <a className="btn btn-flat"><span>Read more</span></a>
      </Link>
      </section>



      <section className="contact">
      <h3>Contact</h3>
        <p className="sub">sub title</p>
        <p className="text">
          これはサンプルテキストです。ここにはそれぞれに合った文言が入ります。
        </p>
        <Link href="/contact">
          <a className="btn btn-flat"><span>Read more</span></a>
        </Link>
      </section>
    </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
    revalidate: 3,
  };
};