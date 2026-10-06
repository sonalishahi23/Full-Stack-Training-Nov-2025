import { Table } from "react-bootstrap";
import StatusBadge from "./StatusBadge";

function RBBadges() {
    const employees = [
        {
            name: "Joseph Oden",
            department: "Sales",
            icon: "bi bi-cart",
            salary: "$64,000",
            date: "Aug 3, 2024",
            status: "PENDING",
            employment: "Full-Time",
        },
        {
            name: "Carol Brown",
            department: "Support",
            icon: "bi bi-telephone",
            salary: "$82,000",
            date: "Aug 6, 2024",
            status: "NEGOTIATING",
            employment: "Part-Time",
        },
        {
            name: "Peggy Castello",
            department: "Design",
            icon: "bi bi-pen",
            salary: "$120,000",
            date: "Aug 13, 2024",
            status: "FAILED",
            employment: "Full-Time",
        },
        {
            name: "Katherine Grey",
            department: "Sales",
            icon: "bi bi-cart",
            salary: "$75,000",
            date: "Aug 19, 2024",
            status: "PAID",
            employment: "Full-Time",
        },
        {
            name: "Sandra Palace",
            department: "Design",
            icon: "bi bi-pen",
            salary: "$54,000",
            date: "Aug 22, 2024",
            status: "PENDING",
            employment: "Contractor",
        },
        {
            name: "Nelson Metz",
            department: "Sales",
            icon: "bi bi-cart",
            salary: "$28,000",
            date: "Aug 27, 2024",
            status: "OVERDUE",
            employment: "Part-Time",
        },
        {
            name: "Roger Ryder",
            department: "Sales",
            icon: "bi bi-cart",
            salary: "$93,000",
            date: "Aug 31, 2024",
            status: "PAID",
            employment: "Contractor",
        },
        {
            name: "Evan Walter",
            department: "Support",
            icon: "bi bi-telephone",
            salary: "$55,000",
            date: "Sep 5, 2024",
            status: "NEGOTIATING",
            employment: "Full-Time",
        },
        {
            name: "Julien Saint",
            department: "Design",
            icon: "bi bi-pen",
            salary: "$87,000",
            date: "Sep 11, 2024",
            status: "OVERDUE",
            employment: "Full-Time",
        },
    ];

    return (

        <div>
            <h2>Badges Table</h2>

            <Table className="badge-table">
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
                            <td>
                                <strong>{employee.name}</strong>
                            </td>

                            <td>
                                <i className={`${employee.icon} me-2`}></i>
                                {employee.department}
                            </td>

                            <td>{employee.salary}</td>

                            <td>{employee.date}</td>

                            <td>
                                <StatusBadge status={employee.status} />
                            </td>

                            <td>{employee.employment}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default RBBadges;