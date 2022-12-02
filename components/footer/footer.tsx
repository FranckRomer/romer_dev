import React from 'react'
import styles from '../../styles/portfolio/Footer.module.css'
import Image from 'next/image'

const Footer = () => (
    <div className={styles.footer}>
        {/*  */}
        <div className={styles.proyectos}>

        </div>
        {/*  */}
        <div className={styles.info}>
            <p> Create by</p>
            <h3>FranckRomer</h3>
            <Image
                src="/icons/corazon.png"
                alt="Picture of the author"
                width={30}
                height={30}
            />
        </div>
        {/*  */}
        <div className={styles.iconos}>

        </div>
    </div>
)

export { Footer }