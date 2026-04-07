import { useState } from 'react';

import { NewProductForm } from './components/NewProductForm';
import { ProductsTable } from './components/ProductsTable';
import { productsList } from './mockData';

export function ProductsPage() {
  const [products, setProducts] = useState(productsList);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleAddProduct(newProduct) {
    setProducts((currentProducts) => [...currentProducts, newProduct]);
    setIsFormVisible(false);
  }

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

      <div className="page__actions">
        <button
          type="button"
          className="primary-button"
          onClick={() => setIsFormVisible((currentValue) => !currentValue)}
        >
          {isFormVisible ? 'Fechar formulario' : 'Novo Produto'}
        </button>
      </div>

      {isFormVisible ? (
        <NewProductForm onSubmitProduct={handleAddProduct} />
      ) : null}

      <ProductsTable
        products={products}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
      />
    </section>
  );
}
