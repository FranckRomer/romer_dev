import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/portfolio/Home.module.css'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Romer-Dev</title>
        <meta name="description" content="Pagina de Francisco Angel Romero Tepal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ------------------------------------------ */}
      <Header page={"home"}></Header>
      {/* ------------------------------------------ */}
      <main className={styles.main}>
        {/* ------------------------------------------ */}
        <section className={styles.welcome}>
          <div className={styles.containW1}>
            <div className={styles.info_contain}>
              <div className={styles.titulo_contain}>
                <div className={styles.titulo1}>
                  <h1>{"<"}</h1><h2>Full-Stack</h2><h1>{"/>"}</h1>
                </div>
                <div className={styles.titulo2}>
                  <h1>{"{"}</h1><h2>Developer</h2><h1>{"}"}</h1>
                </div>
                {/* <hr /> */}
                <div className={styles.linea}></div>
              </div>
              <div className={styles.parrafo_contain}>
                <div className={styles.parrafo}>
                  <p>Hi, I'm Francisco, a web developer and IOT developer.</p>
                  <p></p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, inventore delectus eligendi perferendis qui quis odio, recusandae doloribus dicta repellendus accusamus dolorem quisquam quaerat alias ipsam, iste labore. Velit, quis.</p>
                </div>
                <div className={styles.boton}>
                  <h1><Link href={"/contact"}>Contact</Link></h1>
                  
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containW2}>
            <div className={styles.img_contain}>
              <Image
                src="/imgs/fullstack.png"
                alt="Picture of the author"
                width={480}
                height={270}
              />
            </div>
          </div>





          {/* <div className={styles.welcome_info}>
            <div className={styles.img_contain}>
              <Image
                src="/imgs/fullstack.png"
                alt="Picture of the author"
                width={480}
                height={270}
              />
            </div>
            <div className={styles.welcome_logo}>
              <div className={styles.titulo}>
                <h1>Hola, estamos creando la pagina de home ...</h1>
              </div>
            </div>
          </div>
          <div className={styles.welcome_img}>
            <div className={styles.img_contain}></div>
          </div> */}
        </section>
        {/* ------------------------------------------ */}



      </main>

      <Footer></Footer>
      {/* <footer className={styles.footer}>
        Create by 
        <h3>FranckRomer</h3>
      </footer> */}
    </div>
  )
}
