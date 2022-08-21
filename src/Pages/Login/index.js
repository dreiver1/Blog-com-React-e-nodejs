import  { useState } from "react"
import  { useAuthContext }  from '../../context/AuthContext';



import "./index.css"
export default function Login(){
    const {authenticated, login} = useAuthContext();
    const imageLogin = "https://img.freepik.com/fotos-gratis/tela-de-digitalizacao-de-programador-em-seu-smartwatch-com-camera-do-smartphone_1098-18710.jpg"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        login(email, password);
    }
    return(
        <div className="body">
            <h1 style={{color: 'white'}}>{String(authenticated)}</h1>
            <div className="Login-container">
            <form>
                <div className="form-group">
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>{ setEmail(e.target.value)}}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{ setPassword(e.target.value)}}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <a href="http://localhost:3000/controlers"><button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button></a>
            </form>
            </div>
            <div className="image-login">
                <img src={imageLogin} alt="imagem-ilustration"/>
            </div>
        </div>
    )
}