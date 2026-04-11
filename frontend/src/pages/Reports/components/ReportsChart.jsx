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
  const axisProps = {
    tickLine: false,
    axisLine: false,
    tick: { fill: '#8ea6ca', fontSize: 12 },
  };

  const tooltipProps = {
    contentStyle: {
      borderRadius: '16px',
      border: '1px solid rgba(110, 177, 255, 0.18)',
      background: 'rgba(10, 22, 42, 0.96)',
      color: '#f4f8ff',
      boxShadow: '0 18px 32px rgba(0, 0, 0, 0.26)',
    },
    labelStyle: {
      color: '#f4f8ff',
      fontWeight: 700,
    },
  };

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
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(146, 186, 255, 0.12)" vertical={false} />
              <XAxis dataKey={xAxisKey} {...axisProps} />
              <YAxis {...axisProps} />
              <Tooltip {...tooltipProps} cursor={{ fill: 'rgba(47, 124, 255, 0.08)' }} />
              <Bar dataKey={dataKey} fill={color} radius={[10, 10, 0, 0]} />
            </BarChart>
          ) : null}

          {type === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(146, 186, 255, 0.12)" vertical={false} />
              <XAxis dataKey={xAxisKey} {...axisProps} />
              <YAxis {...axisProps} />
              <Tooltip {...tooltipProps} />
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
              <Tooltip {...tooltipProps} />
              <Legend wrapperStyle={{ color: '#9db0d0', paddingTop: '12px' }} />
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
