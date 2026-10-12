import "./Banner.css";
function Banner() {
    return (
        <section className="banner"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.35),
                        rgba(0, 0, 0, 0.35)
                    ),
                    url("/img/loja-virtual.png")
                `
            }}>
            <div className="banner-conteudo">
                <h2>Bosque das Palavras</h2>
                <p>Onde cada página floresce em um mundo</p>
            </div>
        </section>
    );
}
export default Banner;