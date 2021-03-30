import React from "react"
import { Link } from "react-router-dom"
import "./AsideNav.css"

const AsideNav = () => (
    <aside className="aside-nav">
        <span className="nav-title">
            <Link to="/">React Hook</Link>
        </span>
        <ul>
            <li><Link to="/use-state">useState</Link></li>
            <li><Link to="/use-effect">useEffect</Link></li>
            <li><Link to="/use-ref">useRef</Link></li>
            <li><Link to="/use-memo">useMemo</Link></li>
            <li><Link to="/use-callback">useCallback</Link></li>
        </ul>
        <span className="nav-arrow">
            &gt;
        </span>
    </aside>
)

export default AsideNav