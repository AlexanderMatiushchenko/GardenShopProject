import React from "react";
import styles from  "./index.module.css"
import instaImg from "../../assets/contacts/ic-instagram.svg"
import whatsappImg from "../../assets/contacts/ic-whatsapp.svg"


function Footer(){
    return(
        <div className={styles.contactMain}>
            <h1 className={styles.contactH1}>Contact</h1>
            <div className={styles.contactContainer}>
                <div className={styles.contactPhone}>
                    <p className={styles.contactP}>Phone</p>
                    <h2 className={styles.contactH2}>+49 999 999 99 99</h2>
                </div>
                <div className={styles.contactSocials}>
                    <p className={styles.contactP} >Socials</p>
                    <div className={styles.socialImage}>
                        <a href="https://www.instagram.com/"><img src= {instaImg}alt="instagramIcon" /></a>
                    <a href="https://web.whatsapp.com/"><img src={whatsappImg} alt="whatsappIcon" /></a></div>
                </div>
                <div className={styles.contactAdress}>
                    <p className={styles.contactP}>Adress</p>
                <h2 className={styles.contactH2}>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h2></div>
                <div className={styles.contactsWorkingHours}>
                    <p className={styles.contactP}>Working Hours</p>
                    <h2 className={styles.contactH2}>24 hours a day</h2>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4095605980733!2d13.370224492988218!3d52.50792676508404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0x6a061918b5f3ff91!2sLinkstra%C3%9Fe%202%2F8%20OG%2C%2010%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1703019036389!5m2!1sde!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
        </div>
    )
}
export default Footer;