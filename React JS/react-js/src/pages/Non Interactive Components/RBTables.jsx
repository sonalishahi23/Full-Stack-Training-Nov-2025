import Table from "react-bootstrap/Table";
import StatusBadge from "./StatusBadge";

function RBTables() {

    const employees = [
        {
            name: "Joseph Oden",
            department: "Sales",
            icon: "bi bi-cart",
            salary: "$64,000",
            date: "Aug 3, 2024",
            status: "PENDING",
            employment: "Full-Time"
        },
        {
            name: "Carol Brown",
            department: "Support",
            icon: "bi bi-telephone",
            salary: "$82,000",
            date: "Aug 6, 2024",
            status: "NEGOTIATING",
            employment: "Part-Time"
        },
        {
            name: "Peggy Castello",
            department: "Design",
            icon: "bi bi-pen",
            salary: "$120,000",
            date: "Aug 13, 2024",
            status: "FAILED",
            employment: "Full-Time"
        },
        {
            name: "Katherine Grey",
            department: "Sales",
            icon: "bi bi-cart",
            salary: "$75,000",
            date: "Aug 19, 2024",
            status: "PAID",
            employment: "Full-Time"
        },
        {
            name: "Sandra Palace",
            department: "Design",
            icon: "bi bi-pen",
            salary: "$54,000",
            date: "Aug 22, 2024",
            status: "PENDING",
            employment: "Contractor"
        },
        {
            name: "Nelson Metz",
            department: "Sales",
            icon: "bi bi-cart",
            salary: "$28,000",
            date: "Aug 27, 2024",
            status: "OVERDUE",
            employment: "Part-Time"
        },
        {
            name: "Roger Ryder",
            department: "Sales",
            icon: "bi bi-cart",
            salary: "$93,000",
            date: "Aug 31, 2024",
            status: "PAID",
            employment: "Contractor"
        },
        {
            name: "Evan Walter",
            department: "Support",
            icon: "bi bi-telephone",
            salary: "$55,000",
            date: "Sep 5, 2024",
            status: "NEGOTIATING",
            employment: "Full-Time"
        },
        {
            name: "Julien Saint",
            department: "Design",
            icon: "bi bi-pen",
            salary: "$87,000",
            date: "Sep 11, 2024",
            status: "OVERDUE",
            employment: "Full-Time"
        }
    ];

    return (
        <div className="container-fluid p-4">

            <h1 className="fw-bold mb-4">
                Tables
            </h1>

            {/*RESPONSIVE TABLE*/}

            <div className="mt-4">

                <h2 className="fs-6 fw-semibold mb-3">
                    Responsive Table
                </h2>

                <Table responsive hover>

                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Payment Date</th>
                            <th>Payment Status</th>
                            <th>Employment Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {employees.map((employee, index) => (

                            <tr key={index}>

                                <td className="fw-semibold">
                                    {employee.name}
                                </td>

                                <td>
                                    <i className={`${employee.icon} me-1`}></i>
                                    {employee.department}
                                </td>

                                <td>
                                    {employee.salary}
                                </td>

                                <td>
                                    {employee.date}
                                </td>

                                <td>
                                    <StatusBadge
                                        status={employee.status}
                                    />
                                </td>

                                <td>
                                    {employee.employment}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </div>


            {/*NON-RESPONSIVE TABLE*/}

            <div className="mt-5">

                <h2 className="fs-6 fw-semibold mb-3">
                    Non-Responsive Table
                </h2>

                <Table hover>

                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Payment Date</th>
                            <th>Payment Status</th>
                            <th>Employment Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {employees.map((employee, index) => (

                            <tr key={index}>

                                <td className="fw-semibold">
                                    {employee.name}
                                </td>

                                <td>
                                    <i className={`${employee.icon} me-1`}></i>
                                    {employee.department}
                                </td>

                                <td>
                                    {employee.salary}
                                </td>

                                <td>
                                    {employee.date}
                                </td>

                                <td>
                                    <StatusBadge
                                        status={employee.status}
                                    />
                                </td>

                                <td>
                                    {employee.employment}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </div>

        </div>
    );
}

export default RBTables;