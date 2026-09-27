import DynamicProfileCard from "../components/Dynamic/DynamicProfileCard";

function DynamicPage() {
    return (
        <div className="dynamic-section">

            <h1>Student Profile Card</h1>

            <p className="subtitle">
                Dynamic React Component Assignment
            </p>

            <div className="dynamic-container">

                <DynamicProfileCard
                    name="John Doe"
                    role="Frontend Development Student"
                    description="I enjoy building clean and responsive user interfaces using React."
                    image="https://api.dicebear.com/9.x/avataaars/svg?seed=John"
                />

                <DynamicProfileCard
                    name="Jennifer Martin"
                    role="Backend Development"
                    description="I enjoy building fast and scalable applications using Node.js."
                    image="https://api.dicebear.com/9.x/avataaars/svg?seed=Jennifer"
                />

                <DynamicProfileCard
                    name="Thomas Smith"
                    role="Full Stack Development Student"
                    description="I enjoy building clean and responsive user interfaces and using React."
                    image="https://api.dicebear.com/9.x/avataaars/svg?seed=Thomas"
                />

                <DynamicProfileCard />

            </div>

        </div>
    );
}

export default DynamicPage;