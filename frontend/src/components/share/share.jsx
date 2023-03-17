import {VideoCameraBack, LocalOffer, Image, EmojiEmotions} from '@mui/icons-material'
import './share.css'


function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/person/1.png" className="shareImg" alt="" />
                    <input type="text" placeholder="Share you opinion today" className="shareInput" />
                </div>
{/* ----------------------------------------- */}
                <hr className="shareHr"/>
{/* ----------------------------------------- */}
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <VideoCameraBack htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Live Stream</span>

                        </div>
                        <div className="shareOption">
                            <Image htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Photos or Videos</span>

                        </div>
                        <div className="shareOption">
                            <LocalOffer htmlColor="orange" className="shareIcon"/>
                            <span className="shareOptionText">Tags</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="shareIcon"/>
                            <span className="shareOptionText">Emoji</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share