import './style.css'
export default function navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-color">
            <a className="navbar-brand" href="/">MEU BLOG</a>
             <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    </li>
                        <a className="nav-link" href='/'>HOME <span className="sr-only"></span></a>
                    <li className="nav-item active">
                        <a className="nav-link" href='/'>CATEGORIAS</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href='/posts'>PUBLICAÇÕES</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href='/'>CONTATO</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href='/'>SOBRE</a>
                    </li>
                </ul>
            </div>     
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> 
            <button type="button" className="btn btn-danger"><a href="/login">Login</a></button>
        </nav>
    )
}