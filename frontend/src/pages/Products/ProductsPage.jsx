const products = [
  { name: 'Notebook Pro 14', category: 'Eletrônicos', stock: 24 },
  { name: 'Cadeira Ergo Flex', category: 'Móveis', stock: 12 },
  { name: 'Headset Studio X', category: 'Acessórios', stock: 53 },
];

export function ProductsPage() {
  return (
    <section className="page">
      <header className="page__header">
        <span className="page__eyebrow">Catálogo</span>
        <h1>Produtos</h1>
        <p>Gerencie o portfólio disponível e acompanhe o estoque atual.</p>
      </header>

      <div className="table-card">
        <table className="table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Estoque</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
