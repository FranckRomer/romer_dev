import React, { useState } from 'react'
import styles from "../../styles/portfolio/Header.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Header = (props: any,) => {
    const [modal, setModal] = useState(false)
    console.log(props.page);

    return (
        <div className={styles.Header}>
            {/*  */}
            <div className={styles.Logo}>
                <h3>Romer-Dev</h3>
                <p>Portfolio</p>
            </div>

            {/*  */}
            {props.page == "home" ?
                <div className={styles.Links}>
                    <h3><Link href={"/"}>Home</Link></h3>
                    <h4><Link href={"/projects"}>Projects</Link></h4>
                    <h4><Link href={"/about"}>About</Link></h4>
                    <h4><Link href={"/contact"}>Contact</Link></h4>
                </div>
                : ""}
            {props.page == "project" ?
                <div className={styles.Links}>
                    <h4><Link href={"/"}>Home</Link></h4>
                    <h3><Link href={"/projects"}>Projects</Link></h3>
                    <h4><Link href={"/about"}>About</Link></h4>
                    <h4><Link href={"/contact"}>Contact</Link></h4>
                </div>
                : ""}
            {props.page == "about" ?
                <div className={styles.Links}>
                    <h4><Link href={"/"}>Home</Link></h4>
                    <h4><Link href={"/projects"}>Projects</Link></h4>
                    <h3><Link href={"/about"}>About</Link></h3>
                    <h4><Link href={"/contact"}>Contact</Link></h4>
                </div>
                : ""}
            {props.page == "contact" ?
                <div className={styles.Links}>
                    <h4><Link href={"/"}>Home</Link></h4>
                    <h4><Link href={"/projects"}>Projects</Link></h4>
                    <h4><Link href={"/about"}>About</Link></h4>
                    <h3><Link href={"/contact"}>Contact</Link></h3>
                </div>
                : ""}
            {/*  */}
            <div className={styles.iconos}>
                <div className={styles.changeColor}>
                    <Image
                        src="/icons/moon.png"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                </div>
                <div className={styles.linkdin}>
                    <Link href={"https://www.linkedin.com/in/francisco-angel-romero-tepal-a942b5202/"}>
                        <Image
                            src="/icons/linkedin.png"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
                <div className={styles.githib}>
                    <Link href={"https://github.com/FranckRomer"}>
                        <Image
                            src="/icons/github.png"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
                <div className={styles.hamburguesa} onClick={() => setModal(!modal)}>
                    <Image
                        src="/icons/menus.png"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                </div>
                {modal ?
                    <div className={styles.modal_contain}>
                        <div className={styles.exitModal} onClick={() => setModal(!modal)}></div>
                        <div className={styles.modal}>
                            <div className={styles.Logo}>
                                <h3>Romer-Dev</h3>
                                <p>Portfolio</p>
                                <hr />
                            </div>
                            <div className={styles.LinksModal}>
                                <h3><Link href={"/"}>Home</Link></h3>
                                <h4><Link href={"/projects"}>Projects</Link></h4>
                                <h4><Link href={"/about"}>About</Link></h4>
                                <h4><Link href={"/contact"}>Contact</Link></h4>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    : ""}
                {modal ?
                    <div className={styles.modal_contain}>
                        <div className={styles.exitModal} onClick={() => setModal(!modal)}></div>
                        <div className={styles.modal}>
                            <div className={styles.LogoModal}>
                                <div>
                                    <Image
                                        src="/icons/atras.png"
                                        alt="Picture of the author"
                                        width={30}
                                        height={30}
                                        onClick={() => setModal(false)}
                                    />
                                </div>
                                <div>
                                    <h3>Romer-Dev</h3>
                                    <p>Portfolio</p>

                                </div>
                            </div>
                            <hr />
                            <div className={styles.LinksModal}>
                                <h3><Link className={styles.linkdinModal} href={"/"}>
                                    <Image
                                        src="/icons/home.png"
                                        alt="Picture of the author"
                                        width={30}
                                        height={30}
                                        onClick={() => setModal(false)}
                                    />
                                    Home
                                </Link></h3>
                                <h4><Link className={styles.linkdinModal} href={"/projects"}>
                                    <Image
                                        src="/icons/cohete .png"
                                        alt="Picture of the author"
                                        width={30}
                                        height={30}
                                        onClick={() => setModal(false)}
                                    />
                                    Projects
                                </Link></h4>
                                <h4><Link className={styles.linkdinModal} href={"/about"}>
                                    <Image
                                        src="/icons/contacto.png"
                                        alt="Picture of the author"
                                        width={30}
                                        height={30}
                                        onClick={() => setModal(false)}
                                    />
                                    About
                                </Link></h4>
                                <h4><Link className={styles.linkdinModal} href={"/contact"}>
                                    <Image
                                        src="/icons/telefono.png"
                                        alt="Picture of the author"
                                        width={30}
                                        height={30}
                                        onClick={() => setModal(false)}
                                    />
                                    Contact
                                </Link></h4>

                                <hr />
                            </div>
                            <div>
                                <div >
                                    <Link href={"https://www.linkedin.com/in/francisco-angel-romero-tepal-a942b5202/"} className={styles.githibModal}>
                                        <Image
                                            src="/icons/linkedin.png"
                                            alt="Picture of the author"
                                            width={30}
                                            height={30}
                                        />
                                        <h4>Linkedin</h4>
                                    </Link>
                                </div>
                                <div >
                                    <Link href={"https://github.com/FranckRomer"} className={styles.githibModal}>
                                        <Image
                                            src="/icons/github.png"
                                            alt="Picture of the author"
                                            width={30}
                                            height={30}
                                        />
                                        <h4>Github</h4>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    : ""}
            </div>



        </div>
    )
}

export { Header }