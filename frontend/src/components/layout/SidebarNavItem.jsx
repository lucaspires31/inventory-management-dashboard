import { NavLink } from 'react-router-dom';

export function SidebarNavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
      }
    >
      <span className="sidebar__link-label">{label}</span>
    </NavLink>
  );
}
