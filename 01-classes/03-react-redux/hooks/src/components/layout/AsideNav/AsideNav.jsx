import React from "react"
import { NavLink } from "react-router-dom"
import "./AsideNav.css"

const AsideNav = () => (
    <aside className="aside-nav">
        <span className="nav-title">
            <NavLink exact to="/home">React Hook</NavLink>
        </span>
        <ul>
            <li><NavLink to="/use-state">useState( )</NavLink></li>
            <li><NavLink to="/use-effect">useEffect( )</NavLink></li>
            <li><NavLink to="/use-context">useContext( )</NavLink></li>
            <li><NavLink to="/use-reducer">useReducer( )</NavLink></li>
            <li><NavLink to="/use-callback">useCallback( )</NavLink></li>
            <li><NavLink to="/use-memo">useMemo( )</NavLink></li>
            <li><NavLink to="/use-ref">useRef( )</NavLink></li>
            <li><NavLink to="/use-custom">useCustom( )</NavLink></li>
        </ul>
        <span className="nav-arrow">
            &gt;
        </span>
    </aside>
)

export default AsideNav