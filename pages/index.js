import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>阿卡西终端</title>
        <meta name="description" content="Generated by Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        A̷̜̹͒̇̄͘͠k͉̱̇͝ä̟̙̍ś̡͓͈h̡̛̤̱̽̓́ͅą̼͇ͩ̔̀͞ ̮̺̉T̷̮͍̦̑͆͞͡e̛̦̘͓̫ͤͯ̾ͥ̚̕͟r̸̖̮͈̜͚ṃ̶͊ͧ̇͗iͩ̓́̔ͮ҉͇͡͝n̺̈ͦͭ̊a̛͓ͮ͊͋͒l̵̴̦͙̄
        </h1>

        <p className={styles.description}>
          「最终，森林会记住一切」
        </p>

        <div className={styles.grid}>
          <a 
            href="https://pan.baidu.com/s/19wcQdOmEqeXWd3r50WVwiw?pwd=63w7" 
            className={styles.card}
            target="_blank"
          >
            <h2>百度网盘 &rarr;</h2>
            <p>提取码: 63w7</p>
          </a>
        
          <a
            href="https://cloud.189.cn/t/nuiU3qNz6ri2"
            className={styles.card}
            target="_blank"
          >
            <h2>天翼云盘 &rarr;</h2>
            <p>访问码:5ei2</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a
            href="https://deltaaster-my.sharepoint.com/:f:/g/personal/arkitoaya_arkitosekai_net/ErzZ871R85JOmID6aFgQQtgB8sxD9kz6qniIZMm4tQsrZg?e=r0ocAz"
            className={styles.card}
            target="_blank"
          >
            <h2>OneDrive &rarr;</h2>
            <p>无需会员，速度看脸</p>
          </a>

          <a
            href="https://pan.quark.cn/s/d6f292670531"
            className={styles.card}
            target="_blank"
          >
            <h2>夸克网盘 &rarr;</h2>
            <p></p>
          </a>  
        </div>

        <p className={styles.description}>
          内含最新版：
          <br/>
          Ableton Live 11 & 10
          <br/>
          iZotope RX 10 & 9
          <br/>
          （为了留出空间，旧版本软件仅百度网盘收录）
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://hoshibox.deltaasterism.com"
          target="_blank"
          rel="noreferrer"
        >
          所有资源均收集于网络，下载后请于24小时内删除
        </a>
      </footer>
    </div>
  )
}
