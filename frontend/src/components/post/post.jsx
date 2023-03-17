import { useState } from 'react'
import { MoreHoriz, Close, Favorite, Recommend } from '@mui/icons-material'
import {Users} from "../../dummyData"
import './post.css'


function Post({post}){
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    
    const likeHandle = () => {
        setLike(isLiked? like-1:like+1)
        setIsLiked(!isLiked)
    }

    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img  
                            src={Users.filter((u) => u.id === post.userId)[0].profilePicture} 
                            alt="#" 
                            className='postProfileImg' 
                            />
                        <div className="postUser">
                        <span className="postUserName">
                        {Users.filter((u) => u.id === post.userId)[0].username}
                        </span>
                        <span className="postTime">{post.date}</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                        <MoreHoriz className='postTopRightIcon'/>
                        <Close className='postTopRightIcon'/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postCenterImg" src={post.photo}></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="iconButton" type="button" onClick={likeHandle}>
                        <Recommend htmlColor="#036fe4" className='postBottomIcon'/>
                        </div>
                        <div className='iconButton' type="button" onClick={likeHandle}>
                        <Favorite htmlColor="#e81d44" className='postBottomIcon'/>
                        </div>
                    <span className="postLikeCounter">{like} people reaction</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                        <span className="postShareText">1 shares</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post