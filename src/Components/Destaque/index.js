import './style.css'
export default function Destaque({Post}){
    return(
        <div>
            <div className="Destaque-container">
                <div>
                <img className="image-destaque"src={Post.image} alt='img-do-react'/>
                </div>
            <div className='paragrafo'>
                <p>{Post.data}</p>
                <h2>{Post.title}</h2>
                <p>{Post.description}</p>
            </div>
            </div>
        </div>
    )
}