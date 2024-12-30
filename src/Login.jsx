import { useState } from "react";
function Login({onLoginSuccess}){
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname,setLastname] = useState("");


    const handleLogin = ()=>{
      const profileData = {
        firstname:firstname,
        lastname:lastname,
        email:email,
      };
      onLoginSuccess(profileData);
    }

    return(
       <div>
        <h3>Login</h3>
        <form>
           <input 
           type="text"
           placeholder="first name"
           required
           value={firstname}
           onChange={(e)=>setFirstname(e.target.value)}
            />
          <input 
            type="text" 
            placeholder="Last name"
            required
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
          /> 
            <input 
             type="email"
             placeholder="Email"
             required
             value={email} 
             onChange={(e)=>setEmail(e.target.value)}

            
            />
          <input 
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

          />
          <button type="button" onClick={handleLogin}>Login</button>



        </form>
       </div>

    )
}

export default Login;














