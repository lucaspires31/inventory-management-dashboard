import { DashboardCard } from './components/DashboardCard';
import { dashboardMetrics } from './mockData';

export function DashboardPage() {
  return (
    <section className="page">
      <header className="page__header">
        <span className="page__eyebrow">Resumo operacional</span>
        <h1>Dashboard</h1>
        <p>Visualize rapidamente os principais indicadores do estoque e da venda.</p>
      </header>

      <div className="dashboard-grid">
        {dashboardMetrics.map((metric) => (
          <DashboardCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            description={metric.description}
          />
        ))}
      </div>
    </section>
  );
}
