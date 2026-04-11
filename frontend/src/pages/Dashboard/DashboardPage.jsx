import { DashboardCard } from './components/DashboardCard';
import { DashboardChart } from './components/DashboardChart';
import {
  dashboardMetrics,
  productQuantityData,
  salesOverTimeData,
} from './mockData';

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
            tone={metric.tone}
            icon={metric.icon}
          />
        ))}
      </div>

      <div className="dashboard-charts">
        <DashboardChart
          type="bar"
          title="Produtos e quantidades"
          description="Distribuicao mockada dos itens com maior relevancia no estoque."
          data={productQuantityData}
          dataKey="quantidade"
          xAxisKey="produto"
          color="#0f766e"
        />

        <DashboardChart
          type="line"
          title="Vendas ao longo do tempo"
          description="Evolucao simulada das vendas nas ultimas semanas."
          data={salesOverTimeData}
          dataKey="vendas"
          xAxisKey="periodo"
          color="#2563eb"
        />
      </div>
    </section>
  );
}
