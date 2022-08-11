import Post from '../Post';
import "./style.css"
export default function Home({posts}){
    return(
        <div className="Publicacoes">
            {
                posts && posts.map((post)=>{
                    return <Post Post={post} />;
                })
            }
        </div>
    )
}