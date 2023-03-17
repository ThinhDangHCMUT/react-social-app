import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AiFillPlusCircle} from 'react-icons/ai';

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft mb-[100px]">
          <div className="flex flex-col mb-[30px]">
            <h3 className="loginLogo">React Social</h3>
            <span className="font-pop font-semibold text-[30px]">
                Sign up recently 
            </span>
            <span className="font-pop font-normal text-[#606770]">
                Click your avatar to Login your account.
            </span>
          </div>
          <div className="min-w-[160px] flex">
            <div className="clickAvatar mr-[15px] border-2 rounded-lg cursor-pointer">
                <img src="person/1.png" className="w-[160px] h-[160px] object-cover rounded-t-lg"></img>
                <div className="w-full bg-white p-[5px] rounded-b-lg">
                    <p className="text-center text-[14px] font-pop text-[#606770] font-semibold">Chris Hemsworth</p>
                </div>
            </div>
            <div className="clickAvatar border-2 rounded-lg cursor-pointer">
                <div className="w-[160px] h-[160px] rounded-t-lg bg flex items-center">
                        <AiFillPlusCircle className="mx-auto text-[#1775ee] w-[30px] h-[30px]"/>
                </div>
                <div className="w-full bg-white p-[5px] rounded-b-lg">
                    <p className="text-center text-[14px] font-pop text-[#1775ee] font-semibold">Add New Account</p>
                </div>
            </div>
          </div>
          
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;