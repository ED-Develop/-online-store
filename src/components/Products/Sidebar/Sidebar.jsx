import React from 'react';
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getShowFavorite} from "../../../Redux/productSelector";
import {toggleShowFavorite} from "../../../Redux/products-reducer";


const Sidebar = (props) => {
    const onShowFavorite = (e) => {
        props.toggleShowFavorite(e.target.checked);
    };
    return (
        <aside className={style.sidebar}>
            <div className={style.check}>
                <label><input checked={props.showFavorite} onChange={onShowFavorite} type='checkbox'/>Show
                    favorites</label>
            </div>
            <div className={style.description}>Categories:</div>
            <ul className={style.categories}>
                <li><NavLink activeClassName={style.active} exact={true} to='/'>All</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/phone'>Phones</NavLink></li>
                <li><NavLink activeClassName={style.active} to='/laptop'>Laptops</NavLink></li>
            </ul>
        </aside>
    )
};

const mapStateToProps = (state) => {
    return {
        showFavorite: getShowFavorite(state)
    }
};

export default connect(mapStateToProps, {toggleShowFavorite})(Sidebar);