import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from "../styles/contact.module.scss"
export default function Contact() {
  return (
    <>
    <Layout>
    <h2 className="newstitle">Contact</h2>

    <div className={styles.about}>
        <p className={styles.sub}>
            これはcontactページですこれはcontactページですこれはcontactページですこれは
        </p>
        <div className={styles.main}>
            <h3>CONTACT</h3>
            <form method="POST" action="sample.cgi">
                <p>お名前：<br/><input type="text" name="NAME"/></p>
                <p>メールアドレス：<br/><input type="text" name="email"/></p>
                <p>メッセージ：<textarea type="text" name="email"/></p>
                <a className="btn btn-flat"><span>SEND</span></a>
            </form>
        </div>
    </div>
    </Layout>
    </>
  )
}

