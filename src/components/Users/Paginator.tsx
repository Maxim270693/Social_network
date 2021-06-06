import React from "react";
import styles from "./Users.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator:React.FC<PaginatorPropsType> = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return(
        <div>
            {
                pages.map((p,index) => {
                        return <span key={index} className={currentPage === p ? styles.selectedPage : ''}
                                     onClick={(e) => {
                                         onPageChanged(p)
                                     }}>{p}</span>
                    }
                )
            }
        </div>
    )
}