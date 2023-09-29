import Image from 'next/image';
import styles from './page.module.css';

function TextBlock({ href, title, text }: { href: string, title: string, text: string }) {
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>
        {text}
      </p>
    </a>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority 
        />
      </div>

      <div className={styles.grid}>

        <TextBlock title='Docs' text='Find in-depth information about Next.js features and API.' href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app' />
        <TextBlock title='Learn' text='Learn about Next.js in an interactive course with&nbsp;quizzes!' href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app' />
        <TextBlock title='Templates' text='Explore the Next.js 13 playground.' href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app' />
        <TextBlock title='Deploy' text='Instantly deploy your Next.js site to a shareable URL with Vercel.' href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app' />

      </div>
    </main>
  )
}
