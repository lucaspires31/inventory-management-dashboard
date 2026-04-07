export function DashboardCard({ title, value, description }) {
  return (
    <article className="dashboard-card">
      <span className="dashboard-card__label">{title}</span>
      <strong className="dashboard-card__value">{value}</strong>
      <p className="dashboard-card__description">{description}</p>
    </article>
  );
}
