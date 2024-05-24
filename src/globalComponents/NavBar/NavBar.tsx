import React from 'react';
import styles from "./style.module.css"
import {Link} from "react-router-dom";
import {pagesPath} from "./paths";

export const NavBar = () => {

    return (
        <div className={styles.navbar}>
            {
                pagesPath.map(item => (
                    <Link
                        to={item.path}
                    >
                        {item.name}
                    </Link>
                ))
            }
        </div>
    );
};

