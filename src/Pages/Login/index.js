import "./index.css"
export default function Home(){
    const imageLogin = "https://img.freepik.com/fotos-gratis/tela-de-digitalizacao-de-programador-em-seu-smartwatch-com-camera-do-smartphone_1098-18710.jpg"
    return(
        <div className="body">
            <div className="Login-container">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            <div className="image-login">
                <img src={imageLogin} alt="imagem-ilustration"/>
            </div>
        </div>
    )
}