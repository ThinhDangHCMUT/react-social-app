import Share from "components/share"
import Post from "components/post"
import {Posts} from "dummyData"
import './feed.css'



function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper w-[700px]">
                <Share />
                {Posts.map((item)=>(
                    <Post key={item.id} post={item}/>
                ))}
            </div>
        </div>
    )
}

export default Feed;