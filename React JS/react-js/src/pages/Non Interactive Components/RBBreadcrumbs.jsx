import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Fragment } from "react";
import { ChevronRight } from "react-bootstrap-icons";

function RBBreadcrumbs() {
    return (
        <div className="component-page">

            <h1 className="component-title">
                Breadcrumbs
            </h1>

            

            <div className="mt-3">

                <Breadcrumb className="breadcrumb-custom mb-0">

                    <Breadcrumb.Item
                        href="#"
                        title="This is Cloud"
                    >
                        Cloud

                        <Fragment>
                            <ChevronRight className="mx-2 text-dark" />
                        </Fragment>

                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        href="#"
                        title="This is Files"
                    >
                        Files

                        <Fragment>
                            <ChevronRight className="mx-2 text-dark" />
                        </Fragment>

                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        href="#"
                        title="This is Project"
                    >
                        Project

                        <Fragment>
                            <ChevronRight className="mx-2 text-dark" />
                        </Fragment>

                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        active
                        title="This is ProjectName"
                        className="fw-semibold"
                    >
                        ProjectName
                    </Breadcrumb.Item>

                </Breadcrumb>

            </div>


            {/* Additional Example */}

            <div className="mt-5">

                <h4 className="breadcrumb-heading fw-semibold mb-4">
                    Optional - Additional Example
                </h4>

                <Breadcrumb className="breadcrumb-custom mb-0">

                    <Breadcrumb.Item
                        href="#"
                        title="This is Assignments"
                    >
                        <i className="bi bi-folder-fill me-2"></i>
                        Assignments

                        <Fragment>
                            <ChevronRight className="mx-2 text-dark" />
                        </Fragment>

                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        href="#"
                        title="This is Project"
                    >
                        <i className="bi bi-folder-fill me-2"></i>
                        Project

                        <Fragment>
                            <ChevronRight className="mx-2 text-dark" />
                        </Fragment>

                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        active
                        title="This is TodoList"
                        className="fw-semibold"
                    >
                        <i className="bi bi-code-square me-2"></i>
                        TodoList
                    </Breadcrumb.Item>

                </Breadcrumb>

            </div>

        </div>
    );
}

export default RBBreadcrumbs;