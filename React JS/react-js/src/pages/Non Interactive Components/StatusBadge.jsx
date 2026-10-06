import Badge from "react-bootstrap/Badge";

function StatusBadge({ status }) {

    if (status === "PENDING") {
        return (
            <Badge className="bg-primary bg-opacity-10 text-primary" pill>
                PENDING
            </Badge>
        );
    }

    if (status === "NEGOTIATING") {
        return (
            <Badge className="bg-warning bg-opacity-10 text-warning" pill>
                NEGOTIATING
            </Badge>
        );
    }

    if (status === "FAILED") {
        return (
            <Badge className="bg-danger bg-opacity-10 text-danger" pill>
                FAILED
            </Badge>
        );
    }

    if (status === "PAID") {
        return (
            <Badge className="bg-success bg-opacity-10 text-success" pill>
                PAID
            </Badge>
        );
    }

    if (status === "OVERDUE") {
    return (
        <Badge className="bg-info bg-opacity-10 text-info" pill>
            OVERDUE
        </Badge>
    );
}

    return null;
}

export default StatusBadge;