import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function RBImages() {
    const avatars = [
        {
            name: "Komal Yadav",
            image: "https://i.pravatar.cc/100?img=47"
        },
        {
            name: "Yash Sharma",
            image: "https://i.pravatar.cc/100?img=12"
        },
        {
            name: "Aman Singh",
            image: "https://i.pravatar.cc/100?img=13"
        },
        {
            name: "Priya Mittal",
            image: "https://i.pravatar.cc/100?img=32"
        }
    ];

    return (
        <div >

            <h1 >
                Images
            </h1>

            <div className="mt-5">

                <h2 className="fs-4 fw-semibold mb-3">
                    Avatar Group
                </h2>

                <div className="d-flex align-items-center">

                    {avatars.map((avatar, index) => (
                        <OverlayTrigger
                            key={index}
                            placement="top"
                            overlay={
                                <Tooltip>
                                    {avatar.name}
                                </Tooltip>
                            }
                        >
                            <img
                                src={avatar.image}
                                alt={avatar.name}
                                className={`group-avatar ${
                                    index !== 0 ? "avatar-overlap" : ""
                                }`}
                            />
                        </OverlayTrigger>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default RBImages;