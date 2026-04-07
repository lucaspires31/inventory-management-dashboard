import { ProductsTableActions } from './ProductsTableActions';

export function ProductsTable({ products, onDeleteProduct, onEditProduct }) {
  return (
    <div className="table-card">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Codigo</th>
            <th>Quantidade</th>
            <th>Preco</th>
            <th>Acoes</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.code}>
              <td className="table__primary-cell">{product.name}</td>
              <td>{product.code}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
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
