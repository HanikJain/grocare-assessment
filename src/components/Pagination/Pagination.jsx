import React, { useCallback, useEffect, useState } from 'react'
import styles from "./Pagination.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { pageActions } from '../../store/pageNumber'
import { BsChevronDoubleRight } from "react-icons/bs"
import { BsChevronDoubleLeft } from "react-icons/bs"


export default function Pagination() {
    const pageNumber = useSelector((state) => state.page.page);
    const [pages, setPages] = useState([]);
    const [leftDisabled, setLeftDisabled] = useState(true);
    const [rightDisabled, setRightDisabled] = useState(false);

    const dispatch = useDispatch();



    const decrementHandler = useCallback((e) => {
        e.preventDefault();
        if (pageNumber > 1) {
            dispatch(pageActions.decrementPage());
        }
    }, [pageActions, pageNumber])

    const incrementHandler = useCallback((e) => {
        e.preventDefault();
        if (pageNumber < 9) {
            dispatch(pageActions.incrementPage());
        }
    }, [pageActions, pageNumber])

    // Cal page number array
    useEffect(() => {

        if (pageNumber > 0 && pageNumber <= 3) {
            setPages([1, 2, 3, 4, 5]);
            if (pageNumber === 1) {
                setLeftDisabled(true);
            } else {
                setLeftDisabled(false);
            }
            setRightDisabled(false);

        } else if (pageNumber >= 7 && pageNumber < 10) {
            setPages([5, 6, 7, 8, 9]);
            setLeftDisabled(false);
            if (pageNumber === 9) {
                setRightDisabled(true);
            } else {
                setRightDisabled(false);
            }

        } else if (pageNumber > 3 && pageNumber <= 6) {
            const arr = [pageNumber - 2, pageNumber - 1, pageNumber, pageNumber + 1, pageNumber + 2];
            setPages(arr);
            setLeftDisabled(false);
            setRightDisabled(false);

        } else {
            setPages([1, 2, 3, 4, 5]);
            setLeftDisabled(true);
            setRightDisabled(false);
        }

    }, [pageNumber])

    const pageClickHandler = useCallback((e) => {
        const id = parseInt(e.target.id);
        dispatch(pageActions.setPageNumber(id));
    }, [])

    const renderPages = useCallback((item) => {
        let active = false;
        if (pageNumber === item) {
            active = true;
        }
        return <button onClick={pageClickHandler} id={item} key={item} className={`${styles.btn} ${active && styles.active} `}> {item} </button>
    }, [pageNumber])

    return (
        <div className={styles.container}>
            <button onClick={decrementHandler} className={`${styles.btnDirection} ${leftDisabled && styles.disabled}`}>
                <BsChevronDoubleLeft />
            </button>
            {pages.map(renderPages)}
            <button onClick={incrementHandler} className={`${styles.btnDirection} ${rightDisabled && styles.disabled}`}>
                <BsChevronDoubleRight />
            </button>
        </div>
    )
}








// useEffect(() => {
//     if (!pageNumber) return;

//     let timer = setTimeout(() => {
//         dispatch(pageActions.setPageNumber(pageChange));
//     }, 400)

//     return () => {
//         clearTimeout(timer);
//     }

// }, [pageChange])
