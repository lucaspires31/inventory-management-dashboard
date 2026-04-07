import { useState } from 'react';

const initialFormValues = {
  name: '',
  code: '',
  quantity: '',
  price: '',
};

export function NewProductForm({ onSubmitProduct }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmitProduct({
      name: formValues.name.trim(),
      code: formValues.code.trim(),
      quantity: Number(formValues.quantity),
      price: formValues.price.trim(),
    });

    setFormValues(initialFormValues);
  }

  return (
    <section className="form-card">
      <header className="form-card__header">
        <h2>Novo produto</h2>
        <p>Preencha os campos abaixo para adicionar um item na lista local.</p>
      </header>

      <form className="product-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Nome</span>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Ex: Mouse Precision"
            required
          />
        </label>

        <label className="form-field">
          <span>Codigo</span>
          <input
            type="text"
            name="code"
            value={formValues.code}
            onChange={handleChange}
            placeholder="Ex: PDT-006"
            required
          />
        </label>

        <label className="form-field">
          <span>Quantidade</span>
          <input
            type="number"
            name="quantity"
            value={formValues.quantity}
            onChange={handleChange}
            min="0"
            placeholder="0"
            required
          />
        </label>

        <label className="form-field">
          <span>Preco</span>
          <input
            type="text"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            placeholder="Ex: R$ 199,90"
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="primary-button">
            Adicionar produto
          </button>
        </div>
      </form>
    </section>
  );
}
