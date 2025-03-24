import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoBack = () => {
        // navigate("/");
        navigate(-1);
    };

    if (error.status === 404) {
        return (
            <section className=" error-section">
                <div id="error-text">
                    <figure style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            className="small-img"
                            src="https://elements-resized.envatousercontent.com/elements-video-cover-images/bb14aebc-05a6-45d0-8710-25cfbe752d86/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=8ca3f67c3caad7db1d794a5c5e430fbb4a3df135d51fd10127c867fd4bd25a32"
                            alt="404 page"
                        />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            . The page you were looking for could not be found
                        </p>
                        <p className="p-b">... Back to previous page</p>
                    </div>
                </div>
                {/* <NavLink to="/" className="btn">
          Go Back To HomePage
        </NavLink> */}
                {/* <button className="btn btn-link" onClick={handleGoBack}>
                    Go Back
                </button> */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn btn-link" onClick={handleGoBack}>
                        Go Back
                    </button>
                </div>

            </section>
        );
    }
    console.log(error);

    return <h1> The page you are looking does not exist</h1>;
};

export default ErrorPage;