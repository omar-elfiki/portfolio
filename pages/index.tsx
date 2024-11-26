import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Omar Elfiki</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <img src="/icon.png" alt="Logo" className={styles.topLeftImage}/>
            <img src="/menu.png" alt="Menu" className={styles.topRightImage}/>
            <div className={styles.centerText}>My name is Omar! I'm an aspiring software developer studying my bachelor
                in Computer Science at Maastricht University in Maastricht, Netherlands
            </div>


            <div className={styles.buttonContainer}>
                <button className={styles.button}>More about Me</button>
                <button className={styles.button}>Projects</button>
            </div>

            <div
                className={styles.bottomLeftText}>
                <p>Designed with <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer"
                                    className="text-white">Figma</a> and coded in <a
                    href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer"
                    className="text-white">JetBrains WebStorm</a>. <br/> Built with <a href="https://nextjs.org/"
                                                                                       target="_blank"
                                                                                       rel="noopener noreferrer"
                                                                                       className="text-white">Next.js</a> and <a
                    href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-white">Tailwind
                    CSS</a>, deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"
                                              className="text-white">Vercel</a>. <br/> Icons by <a
                    href="https://icons8.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white">Icons8</a>.
                    Form hosted by <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer"
                                      className="text-white">Formspree.io</a>. <br/> All text is in <a
                        href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer"
                        className="text-white">Inter</a> typeface.</p>
            </div>
        </main>
    </div>
  );
}