import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/Link'
import styles from './Layout.module.scss'
export default function Layout({children,title="default"}) {
    
    const [state, setstate] = useState(false)
    const onClickMenu =()=>{
      document.getElementById("menu").classList.toggle('active');
      setstate(!state)
    }
   

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={styles.header}>
                <h1><Link href="/">COMPANY</Link></h1>
                <nav>
                    <ul>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/news">News</Link></li>
                        <li><Link href="/service">Service</Link></li>
                        <li className={styles.con}><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className={styles.han} onClick={onClickMenu}>
                    <div className="openbtn1" id="menu"><span></span><span></span><span></span></div>
                </div>
            </header>
            {
                state && (
                <>
                <div className={styles.hanmenu}>
                    <ul>
                       <li><Link href="/about">About</Link></li>
                        <li><Link href="/news">News</Link></li>
                        <li><Link href="/service">Service</Link></li>
                        <li className={styles.con}><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                </>
                )
            }

            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>©shunD 2021</p>
            </footer>
        </>
    )
}
