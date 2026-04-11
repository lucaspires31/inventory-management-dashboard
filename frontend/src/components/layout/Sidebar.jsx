import fluxonLogo from '../../assets/fluxon-logo-dark.png';
import { sidebarNavigation } from './sidebarNavigation';
import { SidebarNavItem } from './SidebarNavItem';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img className="sidebar__logo" src={fluxonLogo} alt="FluxON" />
        <div className="sidebar__brand-copy">
          <span className="sidebar__eyebrow">Operations cockpit</span>
          <strong>FluxON Dashboard</strong>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Navegacao principal">
        {sidebarNavigation.map((item) => (
          <SidebarNavItem key={item.to} to={item.to} label={item.label} />
        ))}
      </nav>
    </aside>
  );
}
