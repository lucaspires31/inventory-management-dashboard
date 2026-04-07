import { ProductsTable } from './components/ProductsTable';
import { productsList } from './mockData';

export function ProductsPage() {
  return (
    <section className="page">
      <header className="page__header">
        <span className="page__eyebrow">Catalogo</span>
        <h1>Produtos</h1>
        <p>Acompanhe os itens cadastrados e consulte rapidamente estoque e preco.</p>
      </header>

      <ProductsTable products={productsList} />
    </section>
  );
}
