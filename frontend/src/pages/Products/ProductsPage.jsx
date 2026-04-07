import { useState } from 'react';

import { ProductsTable } from './components/ProductsTable';
import { productsList } from './mockData';

export function ProductsPage() {
  const [products, setProducts] = useState(productsList);

  function handleDeleteProduct(productCode) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.code !== productCode),
    );
  }

  function handleEditProduct(productCode) {
    console.info(`Editar produto: ${productCode}`);
  }

  return (
    <section className="page">
      <header className="page__header">
        <span className="page__eyebrow">Catalogo</span>
        <h1>Produtos</h1>
        <p>Acompanhe os itens cadastrados e consulte rapidamente estoque e preco.</p>
      </header>

      <ProductsTable
        products={products}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
      />
    </section>
  );
}
