import { ReportsChart } from './components/ReportsChart';
import {
  categoryDistributionData,
  salesOverTimeData,
  topSellingProductsData,
} from './mockData';

export function ReportsPage() {
  return (
    <section className="page">
      <header className="page__header">
        <span className="page__eyebrow">Inteligencia</span>
        <h1>Relatorios</h1>
        <p>Centralize analises visuais com dados mockados para acompanhamento estrategico.</p>
      </header>

      <div className="reports-grid">
        <ReportsChart
          type="bar"
          title="Produtos mais vendidos"
          description="Comparativo dos itens com melhor desempenho no periodo."
          data={topSellingProductsData}
          dataKey="quantidade"
          xAxisKey="produto"
          color="#0f766e"
        />

        <ReportsChart
          type="line"
          title="Vendas ao longo do tempo"
          description="Evolucao simulada das vendas em semanas consecutivas."
          data={salesOverTimeData}
          dataKey="vendas"
          xAxisKey="periodo"
          color="#2563eb"
        />

        <ReportsChart
          type="pie"
          title="Distribuicao por categoria"
          description="Participacao percentual das categorias no catalogo atual."
          data={categoryDistributionData}
          dataKey="valor"
          nameKey="categoria"
        />
      </div>
    </section>
  );
}
