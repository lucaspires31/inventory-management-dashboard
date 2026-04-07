import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const pieColors = ['#0f766e', '#2563eb', '#f59e0b', '#dc2626', '#7c3aed'];

export function ReportsChart({
  type,
  title,
  description,
  data,
  dataKey,
  xAxisKey,
  color,
  nameKey,
}) {
  return (
    <article className="reports-chart">
      <header className="reports-chart__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>

      <div className="reports-chart__content">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" vertical={false} />
              <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: 'rgba(148, 163, 184, 0.12)' }} />
              <Bar dataKey={dataKey} fill={color} radius={[10, 10, 0, 0]} />
            </BarChart>
          ) : null}

          {type === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" vertical={false} />
              <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={3}
                dot={{ r: 4, fill: color }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          ) : null}

          {type === 'pie' ? (
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={data}
                dataKey={dataKey}
                nameKey={nameKey}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={52}
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`${entry[nameKey]}-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          ) : null}
        </ResponsiveContainer>
      </div>
    </article>
  );
}
