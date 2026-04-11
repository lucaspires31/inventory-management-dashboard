import { DashboardMetricIcon } from './DashboardMetricIcon';

export function DashboardCard({ title, value, description, tone, icon }) {
  return (
    <article className={`dashboard-card dashboard-card--${tone}`}>
      <div className="dashboard-card__top">
        <div className={`dashboard-card__icon dashboard-card__icon--${tone}`}>
          <DashboardMetricIcon icon={icon} />
        </div>

        <span className="dashboard-card__label">{title}</span>
      </div>

      <strong className="dashboard-card__value">{value}</strong>
      <p className="dashboard-card__description">{description}</p>
    </article>
  );
}
