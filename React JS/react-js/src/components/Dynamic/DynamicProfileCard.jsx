import { DynamicAvatar } from "./DynamicAvatar";

function DynamicProfileCard({
    name = "John Doe",
    role = "Frontend Development Student",
    description = "I enjoy building clean and responsive user interfaces using React.",
    image = "https://i.pravatar.cc/150?img=12"
}) {
    return (
        <div className="dynamic-card">

            <DynamicAvatar
                image={image}
                name={name}
            />

            <h2>{name}</h2>

            <h3>{role}</h3>

            <p>{description}</p>

        </div>
    );
}

export default DynamicProfileCard;