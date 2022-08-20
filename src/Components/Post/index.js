import './style.css'
export default function Post({Post}){
    return(
        <div className="Publicacoes-container">
            <div>
                <img src={Post.image} alt='img-do-react'/>
            </div>
            <div className='Publicacoes-paragrafo'>
                <p>{Post.data}</p>
                <h2>{Post.title}</h2>
                <p>{Post.description}</p>
            </div>
        </div>
    )
}