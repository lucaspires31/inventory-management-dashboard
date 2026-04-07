const reports = [
  'Resumo de vendas por período',
  'Desempenho por categoria',
  'Produtos com maior saída',
];

export function ReportsPage() {
  return (
    <section className="page">
      <header className="page__header">
        <span className="page__eyebrow">Inteligência</span>
        <h1>Relatórios</h1>
        <p>Centralize análises e indicadores estratégicos em um só lugar.</p>
      </header>

      <div className="report-list">
        {reports.map((report) => (
          <article key={report} className="card">
            <strong className="card__value">{report}</strong>
            <p className="card__description">
              Estrutura pronta para conectar gráficos, filtros e exportação.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
