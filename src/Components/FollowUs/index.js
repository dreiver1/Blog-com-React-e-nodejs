import "./index.css"

export default function FollowUs() {
    const github = "https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
    const linkedin = "https://cdn-icons-png.flaticon.com/512/145/145807.png"
    const Instagram = "https://icones.pro/wp-content/uploads/2021/02/instagram-icone-noir.png"
    const youtube = "https://cdn-icons-png.flaticon.com/512/1077/1077046.png"
    return (
        <div className="follow-content">
            <h3>FOLLOW US IN SOCIAL NETWORKS</h3>
            <ul className="social-networks-list">
                <li className="social-networks-item"><a href="www.github.com" className="social-network-icon"><img src={github} alt='icon-github'/> - Github</a></li>
                <li className="social-networks-item"><a href="www.github.com" className="social-network-icon"><img src={linkedin} alt='icon-github'/> - Linkedin</a></li >
                <li className="social-networks-item"><a href="www.github.com" className="social-network-icon"><img src={Instagram} alt='icon-github'/> - Instagram</a></li >
                <li className="social-networks-item"><a href="www.github.com" className="social-network-icon"><img src={youtube} alt='icon-github'/> - Youtube</a></li>
            </ul>
        </div>
    )
}