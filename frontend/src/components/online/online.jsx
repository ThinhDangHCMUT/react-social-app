function Online({user}){
    return (
        <div className="flex items-center my-[20px]">
              <div className="relative mr-[10px]">
                <img className="w-[32px] h-[32px] rounded-full object-cover" src={user.profilePicture}></img>
                {/* <span className="w-[10px] h-[10px] rounded-full absolute bg-[limegreen] border-2 border-white right-[355px] top-[24px]"></span> */}
              </div>
              <div>{user.username}</div>
        </div>
    )
}
export default Online;