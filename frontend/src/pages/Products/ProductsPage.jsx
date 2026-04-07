import { useState } from 'react';

import { NewProductForm } from './components/NewProductForm';
import { ProductsTable } from './components/ProductsTable';
import { productsList } from './mockData';

export function ProductsPage() {
  const [products, setProducts] = useState(productsList);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  function handleAddProduct(newProduct) {
    setProducts((currentProducts) => [...currentProducts, newProduct]);
    setEditingProduct(null);
    setIsFormVisible(false);
  }

  function handleUpdateProduct(updatedProduct, originalCode) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.code === originalCode ? updatedProduct : product,
      ),
    );
    setEditingProduct(null);
    setIsFormVisible(false);
  }

  function handleDeleteProduct(productCode) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.code !== productCode),
    );
    if (editingProduct?.code === productCode) {
      setEditingProduct(null);
      setIsFormVisible(false);
    }
  }

  function handleEditProduct(productCode) {
    const productToEdit = products.find((product) => product.code === productCode);

    if (!productToEdit) {
      return;
    }

    setEditingProduct(productToEdit);
    setIsFormVisible(true);
  }

  function handleToggleForm() {
    if (isFormVisible) {
      setEditingProduct(null);
      setIsFormVisible(false);
      return;
    }

    setEditingProduct(null);
    setIsFormVisible(true);
  }

  function handleCancelForm() {
    setEditingProduct(null);
    setIsFormVisible(false);
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
          onClick={handleToggleForm}
        >
          {isFormVisible && !editingProduct ? 'Fechar formulario' : 'Novo Produto'}
        </button>
      </div>

      {isFormVisible ? (
        <NewProductForm
          initialProduct={editingProduct}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          onCancel={handleCancelForm}
        />
      ) : null}

      <ProductsTable
        products={products}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
      />
    </section>
  );
}
