import Destaque  from '../../Components/Destaque'
import Publicacoes  from '../../Components/Publications'
import { useState, useEffect } from 'react'
import "./style.css"
import FollowUs from '../../Components/FollowUs'
import Categories from '../../Components/Categories'
export default function Home(){
    let moks = [
        {
            image: "https://i.pinimg.com/originals/17/77/ee/1777eedea3ceaad36a2966a2826c2aad.png",
            data: "27 Ouctubre 2022",
            title: "cacilds vidis litro abertis.",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss deixa as pessoas mais interessantis.Diuretics paradis num copo é motivis de denguis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
        },
        {
            image: "https://i.ytimg.com/vi/1srLNtDEQJc/maxresdefault.jpg",
            data: "27 Ouctubre 2022",
            title: "Copo furadis é disculpa de bebadis",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss deixa as pessoas mais interessantis.Diuretics paradis num copo é motivis de denguis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
        },
        {
            image: "https://i.ytimg.com/vi/dqVX2QREQ3k/maxresdefault.jpg",
            data: "27 Ouctubre 2022",
            title: "Suco de cevadiss deixa as pessoas mais interessantis.",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss deixa as pessoas mais interessantis.Diuretics paradis num copo é motivis de denguis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
        },
        {
            img: "https://i.pinimg.com/originals/6d/bf/1f/6dbf1f24cd721ada89875badc21a0079.png",
            data: "27 Ouctubre 2022",
            title: "Suco de cevadiss deixa as pessoas mais interessantis.",
            description: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Suco de cevadiss deixa as pessoas mais interessantis.Diuretics paradis num copo é motivis de denguis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
        }
    ]
    const [posts, setPosts] = useState(moks)
    async function getPosts(){
        const response = await fetch('https://servermyapp.herokuapp.com/posts')
        const posts = await response.json();
        console.log(posts[0])
        setPosts(posts)
    }
    useEffect(()=>{
        getPosts()
    }, [])

    return(
        <div className="Home-container">
            <Destaque Post={posts[0]}/> 
            <div class="row">
            <div class="col-sm">
                <div className="Publicacoes">
                    <Publicacoes posts={posts}/>
                </div>
            </div>
            <div class="col-sm">
                <div className="Publicacoes">
                    <FollowUs></FollowUs>
                    <Categories></Categories>
                </div>
            </div>
            </div>
        </div>
    )
}