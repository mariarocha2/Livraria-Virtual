import CardProduto from "../components/CardProduto";
import "./Produtos.css";
function Produtos() {
    const produtos = [
        { nome: "A Canção de Aquile", preco: "81,90", imagem: "/img/aquiles.jpg"},
        { nome: "Harry Potter", preco: "406,90", imagem: "/img/harry-potter.jpg"},
        { nome: "Trono de Vidro", preco: "200,25", imagem: "/img/trono-de-vidro.jpg"},
        { nome: "Os Dois Morrem No Final", preco: "69,90", imagem: "/img/os-dois.jpg"},
        { nome: "O Primeiro A Morrer No Final", preco: "74,90", imagem: "/img/o-primeiro.jpg"},
        { nome: "O Sobrevivente Quer Morrer No Final", preco: "84,90", imagem: "/img/o-sobrevivente.jpg"},
    ];
    return (
        <section className="pagina-produtos">
            <h2>Acervo Literário</h2>
            <div className="lista-produtos">
                {produtos.map((produto, index) => (
                    <CardProduto
                        key={index}
                        nome={produto.nome}
                        preco={produto.preco}
                        imagem={produto.imagem}
                    />
                ))}
            </div>
        </section>
    );
}
export default Produtos;