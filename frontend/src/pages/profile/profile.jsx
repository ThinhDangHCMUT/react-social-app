import "./profile.css";
import Topbar from "components/topbar";
import Sidebar from "components/sidebar";
import Feed from "components/feed";
import Rightbar from "components/rightbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="cover.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="person/1.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h3 className="font-bold profileInfoName">Chris Hemsworth</h3>
                <span className="font-semibold profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;