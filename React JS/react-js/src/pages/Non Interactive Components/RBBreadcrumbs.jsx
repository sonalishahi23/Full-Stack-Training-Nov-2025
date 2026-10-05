import Breadcrumb from "react-bootstrap/Breadcrumb";

function RBBreadcrumbs() {
    return (
        <div className="component-page">

            <h1 className="component-title">
                Breadcrumbs
            </h1>

            {/* Basic Breadcrumb */}

            <div className="breadcrumb-example">

                <Breadcrumb>

                    <Breadcrumb.Item
                        href="#"
                        title="This is Cloud"
                    >
                        Cloud
                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        href="#"
                        title="This is Files"
                    >
                        Files
                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        href="#"
                        title="This is Project"
                    >
                        Project
                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        active
                        title="This is ProjectName"
                    >
                        ProjectName
                    </Breadcrumb.Item>

                </Breadcrumb>

            </div>


            {/* Additional Example */}

            <div className="breadcrumb-additional">

                <h4>
                    Optional - Additional Example
                </h4>

                <Breadcrumb>

                    <Breadcrumb.Item
                        href="#"
                        title="This is Assignments"
                    >
                        <i className="bi bi-folder-fill"></i>
                        <span>Assignments</span>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        href="#"
                        title="This is Project"
                    >
                        <i className="bi bi-folder-fill"></i>
                        <span>Project</span>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item
                        active
                        title="This is TodoList"
                    >
                        <i className="bi bi-code-square"></i>
                        <span>TodoList</span>
                    </Breadcrumb.Item>

                </Breadcrumb>

            </div>

        </div>
    );
}

export default RBBreadcrumbs;