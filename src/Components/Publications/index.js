import Post from '../Post';
import "./style.css"
export default function Home({posts}){
    return(
        <div className="Publicacoes">
            <h1>RECENT POST</h1>
            {
                posts && posts.map((post)=>{
                    return <Post Post={post} />;
                })
            }
        </div>
    )
}