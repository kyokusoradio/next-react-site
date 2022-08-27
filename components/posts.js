import styles from "styles/posts.module.css"
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
    return (
        <div className={styles.gridConatiner}>
            {posts.map(({ title, slug }) => (
                <article className={styles.post} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <a>
                            <h2>{title}</h2>
                        </a>
                    </Link>
                </article>
            ))}
        </div>
    )
}

