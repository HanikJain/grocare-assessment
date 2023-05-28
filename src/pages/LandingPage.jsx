import React from 'react'
import styles from "./LandingPage.module.css"
import Pagination from '../components/Pagination/Pagination';
import Posts from '../components/Posts/Posts';

export default function LandingPage() {
    return (
        <>
            <div className={styles.navbar}>
                <img src="https://gro.care/static/images/app_logo.svg" alt="Gro care logo" />
            </div>
            <Posts />
            <Pagination />
        </>
    )
}
