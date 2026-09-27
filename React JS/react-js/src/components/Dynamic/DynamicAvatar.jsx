function DynamicAvatar({
    image = "https://api.dicebear.com/9.x/avataaars/svg?seed=John",
    name = "John Doe"
}) {
    return (
        <img
            className="dynamic-avatar"
            src={image}
            alt={name}
        />
    );
}

export { DynamicAvatar };