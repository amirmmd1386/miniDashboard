import { NavLink } from "react-router-dom"

export const Sidebar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark  container-fluid ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">داشبورد</a>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                            <h5 className="offcanvas-title text-dark " id="offcanvasNavbarLabel">
                                داشبورد
                            </h5>
                        </div>
                        <div className="offcanvas-body text-end bg-dark">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink to='/' className={({ isActive }) => { return isActive ? 'nav-link active' : 'nav-link' }} >
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                        کاربران</NavLink>
                                </li>
                                <li className="">
                                    <hr className="dropdown-divider " />
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/gallery' className={({ isActive }) => { return isActive ? 'nav-link active' : 'nav-link' }} ><i class="fa fa-picture-o" aria-hidden="true"></i>گالری</NavLink>
                                </li>
                                <li className="">
                                    <hr className="dropdown-divider " />
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/post' className={({ isActive }) => { return isActive ? 'nav-link active' : 'nav-link' }} ><i class="fa fa-archive" aria-hidden="true"></i>
                                        پست ها</NavLink>
                                </li>
                                <li className="">
                                    <hr className="dropdown-divider " />
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/work' className={({ isActive }) => { return isActive ? 'nav-link active' : 'nav-link' }} ><i class="fa fa-shopping-bag" aria-hidden="true"></i>کارها</NavLink>
                                </li>
                                <li className="">
                                    <hr className="dropdown-divider " />
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}