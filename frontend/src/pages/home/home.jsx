import Topbar from "components/topbar"
import SideBar from "components/sidebar"
import Feed from "components/feed"
import RightBar from "components/rightbar"
import './home.css'


function Home() {
    return (
        <>
        <Topbar />
        <div className="homeContainer">
            <SideBar />
            <Feed />
            <RightBar />
        </div>
        </>
    )
}

export default Home