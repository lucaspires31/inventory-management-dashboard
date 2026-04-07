export function ProductsTableActions({ productCode, onDeleteProduct, onEditProduct }) {
  return (
    <div className="table-actions">
      <button
        type="button"
        className="table-action-button table-action-button--secondary"
        onClick={() => onEditProduct(productCode)}
      >
        Editar
      </button>

      <button
        type="button"
        className="table-action-button table-action-button--danger"
        onClick={() => onDeleteProduct(productCode)}
      >
        Deletar
      </button>
    </div>
  );
}
