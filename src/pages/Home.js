import Banner from "../components/Banner";
import "./Home.css";
function Home() {
    return (
        <div className="pagina-home">
            <Banner />
            <section className="home-sobre">
                <h2>O que é o Bosque das Palavras?</h2>
                <p>
                    O Bosque das Palavras é uma livraria virtual que reúne livros de diversos gêneros, como romance, fantasia e suspense. Inspirada na natureza e na magia da leitura, busca proporcionar aos leitores a descoberta de novos mundos e experiências através das histórias.

                </p>
            </section>
        </div>
    );
}
export default Home;