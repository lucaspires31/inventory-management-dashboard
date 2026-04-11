import { ProductsTableActions } from './ProductsTableActions';

export function ProductsTable({ products, onDeleteProduct, onEditProduct }) {
  return (
    <div className="table-card">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Codigo</th>
            <th className="table__numeric-head">Quantidade</th>
            <th className="table__numeric-head">Preco</th>
            <th className="table__actions-head">Acoes</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.code}>
              <td className="table__primary-cell">{product.name}</td>
              <td className="table__code-cell">{product.code}</td>
              <td className="table__numeric-cell">{product.quantity}</td>
              <td className="table__numeric-cell table__price-cell">{product.price}</td>
              <td className="table__actions-cell">
                <ProductsTableActions
                  productCode={product.code}
                  onDeleteProduct={onDeleteProduct}
                  onEditProduct={onEditProduct}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
