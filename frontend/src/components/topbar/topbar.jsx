import "./topbar.css"
import PersonIcon from '@mui/icons-material/Person';
import Search from '@mui/icons-material/Search'
import {Notifications, Chat } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from 'react-router-dom'

function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
            <Link to="/">
                <span className="logo">React Social</span>
            </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"></Search>
                    <input type="text" placeholder="Search for friend, posts or videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon></PersonIcon>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat></Chat>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications></Notifications>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <div className="topbarImgs">
                <img src="/person/1.png" alt="#" className="topbarImg" />
                <KeyboardArrowDownIcon className="topbarImgContent"></KeyboardArrowDownIcon>
                </div>
            </div>
        </div>
    )
}

export default Topbar

