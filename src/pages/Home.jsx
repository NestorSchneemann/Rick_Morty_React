import '../pages/Home.css'
import banner from '../assets/banner.jpg'



function Home(){
    return(
        <div className="home">
            <h1>Rick and Morty plagio de API</h1>
            <div className="contenido">
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, impedit. Dignissimos dolorem tempore nostrum illo nemo mollitia magni aut consectetur sint dolor, commodi itaque expedita rerum, eligendi suscipit omnis ad?</p>
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Home;