import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet } from "react-router";

function MainLayout() {

    const [openSection, setOpenSection] = useState(null);

    const handleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };

    return (
        <div className="app-layout">

            {/* Sidebar */}
            <div className="sidebar">

                <h3 className="sidebar-title">
                    Menu
                </h3>

                {/* ================= ASSIGNMENTS ================= */}

                <div className="sidebar-section">

                    <div
                        className="section-header"
                        onClick={() => handleSection("assignment")}
                    >
                        <span>Assignments</span>

                        <i
                            className={
                                openSection === "assignment"
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }
                        ></i>
                    </div>


                    {openSection === "assignment" && (
                        <div className="section-items">

                            <Link to="/">
                                <i className="bi bi-house"></i>
                                Home
                            </Link>

                            <Link to="/static">
                                <i className="bi bi-person"></i>
                                Static
                            </Link>

                            <Link to="/dynamic">
                                <i className="bi bi-people"></i>
                                Dynamic
                            </Link>

                            <Link to="/counter">
                                <i className="bi bi-plus-slash-minus"></i>
                                Counter
                            </Link>

                            <Link to="/todo">
                                <i className="bi bi-list-check"></i>
                                Todo List
                            </Link>

                        </div>
                    )}

                </div>


                {/* ================= NON INTERACTIVE ================= */}

                <div className="sidebar-section">

                    <div
                        className="section-header"
                        onClick={() => handleSection("nonInteractive")}
                    >
                        <span>Non Interactive Comp.</span>

                        <i
                            className={
                                openSection === "nonInteractive"
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }
                        ></i>
                    </div>

                    {openSection === "nonInteractive" && (
                        <div className="section-items">

                            <Link to="/badges">
                                <i className="bi bi-patch-check"></i>
                                Badges
                            </Link>

                            <Link to="/breadcrumbs">
                                <i className="bi bi-signpost"></i>
                                Breadcrumbs
                            </Link>

                            <Link to="/buttons">
                                <i className="bi bi-square"></i>
                                Buttons
                            </Link>

                            <Link to="/button-group">
                                <i className="bi bi-ui-radios-grid"></i>
                                Button Group
                            </Link>

                            <Link to="/cards">
                                <i className="bi bi-card-text"></i>
                                Cards
                            </Link>

                            <Link to="/images">
                                <i className="bi bi-image"></i>
                                Images
                            </Link>

                            <Link to="/list-group">
                                <i className="bi bi-list-ul"></i>
                                List Group
                            </Link>

                            <Link to="/figures">
                                <i className="bi bi-image"></i>
                                Figures
                            </Link>

                            <Link to="/pagination">
                                <i className="bi bi-menu-button-wide"></i>
                                Pagination
                            </Link>

                            <Link to="/progress-bars">
                                <i className="bi bi-bar-chart"></i>
                                Progress Bars
                            </Link>

                            <Link to="/spinners">
                                <i className="bi bi-arrow-repeat"></i>
                                Spinners
                            </Link>

                            <Link to="/tables">
                                <i className="bi bi-table"></i>
                                Tables
                            </Link>

                            <Link to="/close-button">
                                <i className="bi bi-x-circle"></i>
                                Close Button
                            </Link>



                        </div>
                    )}

                </div>


                {/* ================= INTERACTIVE COMPONENTS ================= */}

                <div className="sidebar-section">

                    <div
                        className="section-header"
                        onClick={() => handleSection("interactive")}
                    >
                        <span>Interactive Comp.</span>

                        <i
                            className={
                                openSection === "interactive"
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }
                        ></i>
                    </div>

                    {openSection === "interactive" && (
                        <div className="section-items">

                            <Link to="/accordions">
                                <i className="bi bi-menu-button-wide"></i>
                                Accordions
                            </Link>

                            <Link to="/carousels">
                                <i className="bi bi-images"></i>
                                Carousels
                            </Link>

                            <Link to="/dropdown">
                                <i className="bi bi-menu-button"></i>
                                Dropdown
                            </Link>

                            <Link to="/modals">
                                <i className="bi bi-window me-2"></i>
                                Modals
                            </Link>

                            <Link to="/navbar-offcanvas">
                                <i className="bi bi-layout-sidebar-inset me-2"></i>
                                Navbar & Offcanvas
                            </Link>

                            <Link to="/navs-tabs">
                                <i className="bi bi-layout-text-window-reverse me-2"></i>
                                Navs and Tabs
                            </Link>

                            <Link to="/overlays">
                                <i className="bi bi-chat-square-text me-2"></i>
                                Overlays & Tooltips
                            </Link>


                        </div>
                    )}

                </div>

                {/* ================= FORM ================= */}

                <div className="sidebar-section">
                    <div
                        className="section-header"
                        onClick={() => handleSection("form")}
                    >
                        <span>Form</span>

                        <i
                            className={
                                openSection === "form"
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }
                        ></i>
                    </div>

                    {openSection === "form" && (
                        <div className="section-items">
                            <Link to="/form">
                                <i className="bi bi-ui-checks"></i>
                                Form Basic Control
                            </Link>

                            <Link to="/formik-validation" className="nav-link">
                                <i className="bi bi-ui-checks-grid me-2"></i>
                                Formik Form
                            </Link>
                            <Link to="/rhfvalidation" className="nav-link">
                                <i className="bi bi-ui-checks-grid me-2"></i>
                                RHF Basic Validation
                            </Link>
                            <Link to="/rhf-yup-schema" className="nav-link">
                                <i className="bi bi-ui-checks-grid me-2"></i>
                                RHF Yup Schema
                            </Link>
                        </div>
                    )}
                </div>

                {/* ================= ADVANCE ROUTING ================= */}

                <div className="sidebar-section">

                    <div
                        className="section-header"
                        onClick={() => handleSection("advanceRouting")}
                    >
                        <span>Advance Routing</span>

                        <i
                            className={
                                openSection === "advanceRouting"
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }
                        ></i>
                    </div>

                    {openSection === "advanceRouting" && (
                        <div className="section-items">

                            <Link to="/blog">
                                <i className="bi bi-arrow-right"></i>
                                Blog
                            </Link>

                        </div>
                    )}

                </div>
                
            </div>


            {/* Main Content */}

            <div className="content-area">
                <Outlet />
            </div>


            {/* Toastify */}

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />

        </div>
    );
}

export default MainLayout;