import { Avatar } from "./Avatar";

function StaticProfileCard() {
    return (
        <div className="static-section">

            <h1>Student Profile Card</h1>

            <p className="subtitle">
                Static React Component Assignment
            </p>

            <div className="static-card">

                <Avatar />

                <h2>John Doe</h2>

                <h3>Front-end Development Student</h3>

                <p>
                    I enjoy building clean and responsive
                    user interfaces using React.
                </p>

            </div>

            <p className="footer">
                Created for React Practice
            </p>

        </div>
    );
}

export default StaticProfileCard;