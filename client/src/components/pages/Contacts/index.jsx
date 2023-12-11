import React from "react";
import styles from  "./index.module.css"
import instaImg from "../../../assets/contacts/ic-instagram.svg"
import whatsappImg from "../../../assets/contacts/ic-whatsapp.svg"
import map from "../../../assets/contacts/map.svg"

function Contact(){
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
                    <div className={styles.socialImage}><img src= {instaImg}alt="instagramIcon" />
                    <img src={whatsappImg} alt="whatsappIcon" /></div>
                </div>
                <div className={styles.contactAdress}>
                    <p className={styles.contactP}>Adress</p>
                <h2 className={styles.contactH2}>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h2></div>
                <div className={styles.contactsWorkingHours}>
                    <p className={styles.contactP}>Working Hours</p>
                    <h2 className={styles.contactH2}>24 hours a day</h2>
                </div>
            </div>
            <img className={styles.mapImg} src={map} alt="map" />
        </div>
    )
}
export default Contact;