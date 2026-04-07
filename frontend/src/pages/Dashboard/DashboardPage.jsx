const dashboardCards = [
  { title: 'Faturamento', value: 'R$ 128.000' },
  { title: 'Pedidos hoje', value: '248' },
  { title: 'Conversão', value: '4,8%' },
];

export function DashboardPage() {
  return (
    <section className="page">
      <header className="page__header">
        <span className="page__eyebrow">Visão geral</span>
        <h1>Dashboard</h1>
        <p>Acompanhe rapidamente os principais indicadores do seu negócio.</p>
      </header>

      <div className="stats-grid">
        {dashboardCards.map((card) => (
          <article key={card.title} className="card">
            <span className="card__label">{card.title}</span>
            <strong className="card__value">{card.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
