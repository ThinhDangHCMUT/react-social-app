import { Home, Chat, YouTube, Group, Bookmark, Store, Event} from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './sidebar.css'

function SideBar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Home className="sidebarIcon"/>
                        <span className="sidebarText">Home</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/person/1.png" alt="#" className="topbarImg sidebarImg sidebarIcon" />
                        <span className="sidebarText">Thinh Dang</span>
                    </li>
                </ul>
                <hr className='sidebarHr'/>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon'/>
                        <span className="sidebarText">Friend</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon'/>
                        <span className="sidebarText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <YouTube className='sidebarIcon'/>
                        <span className="sidebarText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon'/>
                        <span className="sidebarText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <Store className='sidebarIcon'/>
                        <span className="sidebarText">Shop</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className="sidebarText">Event</span>
                    </li>
                    <button className="sidebarButton">More</button>
                </ul>
                <hr className='sidebarHr'/>
                <ul className="sidebarShortCutList sidebarList">
                    <li className="sidebarShortCutItem sidebarListItem">
                        <img src="/person/2.png" alt="" className="sidebarFriendImg sidebarIcon" />
                        <span className="sidebarFriendName">Thai Duong</span>
                    </li>
                    <li className="sidebarShortCutItem sidebarListItem">
                        <img src="/person/3.png" alt="" className="sidebarFriendImg sidebarIcon" />
                        <span className="sidebarFriendName">Viet Anh</span>
                    </li>
                    <li className="sidebarShortCutItem sidebarListItem">
                        <img src="/person/4.png" alt="" className="sidebarFriendImg sidebarIcon" />
                        <span className="sidebarFriendName">Phuc Thinh</span>
                    </li>
                    <li className="sidebarShortCutItem sidebarListItem">
                        <img src="/person/4.png" alt="" className="sidebarFriendImg sidebarIcon" />
                        <span className="sidebarFriendName">Phuc Thinh</span>
                    </li>
                    <li className="sidebarShortCutItem sidebarListItem">
                        <img src="/person/4.png" alt="" className="sidebarFriendImg sidebarIcon" />
                        <span className="sidebarFriendName">Phuc Thinh</span>
                    </li>
                    <li className="sidebarShortCutItem sidebarListItem">
                        <img src="/person/4.png" alt="" className="sidebarFriendImg sidebarIcon" />
                        <span className="sidebarFriendName">Phuc Thinh</span>
                    </li>
                    <li className="sidebarShortCutItem sidebarListItem">
                        <img src="/person/4.png" alt="" className="sidebarFriendImg sidebarIcon" />
                        <span className="sidebarFriendName">Phuc Thinh</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SideBar