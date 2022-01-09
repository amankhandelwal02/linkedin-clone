import Loader from "react-loader-spinner";

const Spinner = () => {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" height="200" width="200" alt="" className="pb-7"/>
                <Loader type="TailSpin" color="#0a66c2" height={80} width={80} />
            </div>
        </center>
    )
}

export default Spinner
