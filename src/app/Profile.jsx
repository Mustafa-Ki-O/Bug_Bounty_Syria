import InfoCompany from "../components/profile/InfoCompany";
import Info from "../components/profile/Info";
import Progress from "../components/general/Progress";
import { useState } from "react";

const Profile = () => {
    const [ progress,setProgress] = useState(false)
    const company = localStorage.getItem('company')
    return(
        <>
        {progress && <Progress/>}
        {company ? (
            <InfoCompany setProgress={setProgress}/>
        ):(
            <Info setProgress={setProgress}/>
        )}
        </>
    )

}
export default Profile;