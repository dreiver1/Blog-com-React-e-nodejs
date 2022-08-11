import './style.css'
export default function navbar(){
    return(
        <nav className="navbar">
            <div>
                <a href="/">
                    <h1>MEU BLOG</h1>
                </a>
            </div>
             <div>
                <a href='/'>HOME</a>
                <a href='/post'>PUBLICAÇÕES</a>
                <a href='/'>CATTEGORIASA</a>
                <a href='/'>CONTATO</a>
                <a href='/'>SOBRE</a>
            </div>        
        </nav>
    )
}