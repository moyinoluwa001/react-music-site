import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Header(){
    const [activeComponent,setActiveComponent] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userProfile, setUserProfile] = useState({});
    const [showProfile, setShowProfile] = useState(false);

    const showLogin = () => setActiveComponent('login');
    const showSignup = () => setActiveComponent('signup');
    const resetComponent = () => setActiveComponent(null);

    const handleLoginSuccess = (profileData) => {
      setUserLoggedIn(true);
      setUserProfile(profileData);
      setActiveComponent(null)
    };

    const handleLogout = ()=>{
      setUserLoggedIn(false);
      setUserProfile({});
      setShowProfile(false);
    };
    const toggleProfileVisibility = ()=>{
      setShowProfile((prev)=>! prev)
    };

    return(
      <div>
            <div className="two">
              <div>
                <h2>SPORTY LIGHT</h2>
              </div>
              <div>
                {!userLoggedIn && (
                  <>
                    <button className="head" onClick={showLogin}>Login</button>
                    <button className="head" onClick={showSignup}>Signup</button>
                  </>
                )}
                {userLoggedIn && (
                  <button className="head" onClick={handleLogout}>Logout</button>
                )}
                 
              </div>
              
            </div>
      
            <div className="auth-container">
              {activeComponent === "login" && <Login onLoginSuccess={handleLoginSuccess} />}
              {activeComponent === "signup" && <Signup />}
              
              {userLoggedIn && (
                <div className="profile-icon-container">
                  <button className="profile-icon" onClick={toggleProfileVisibility}>
                    {showProfile ? "Hide Profile" : "Show Profile"}
                  </button>
                  {showProfile && (
                    <div className="user-profile">
                      <h3>User Profile</h3>
                      <p><strong>First Name:</strong> {userProfile.firstname}</p>
                      <p><strong>Last Name:</strong> {userProfile.lastname}</p>
                      <p><strong>Email:</strong> {userProfile.email}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

            )


}

export default Header;








