import { sidebarNavigation } from './sidebarNavigation';
import { SidebarNavItem } from './SidebarNavItem';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__eyebrow">Vite + React</span>
        <strong>Painel Admin</strong>
      </div>

      <nav className="sidebar__nav" aria-label="Navegacao principal">
        {sidebarNavigation.map((item) => (
          <SidebarNavItem key={item.to} to={item.to} label={item.label} />
        ))}
      </nav>
    </aside>
  );
}
