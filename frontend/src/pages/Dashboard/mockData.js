export const dashboardMetrics = [
  {
    title: 'Total de produtos',
    value: '248',
    description: 'Itens cadastrados atualmente no catalogo.',
    tone: 'inventory',
    icon: 'inventory',
  },
  {
    title: 'Produtos com estoque baixo',
    value: '17',
    description: 'Produtos que exigem reposicao nos proximos dias.',
    tone: 'warning',
    icon: 'warning',
  },
  {
    title: 'Produto mais vendido',
    value: 'Notebook Pro 14',
    description: 'Lider de saida no periodo analisado.',
    tone: 'sales',
    icon: 'sales',
  },
  {
    title: 'Produto mais parado',
    value: 'Suporte Vertical X',
    description: 'Item com menor giro recente no estoque.',
    tone: 'idle',
    icon: 'idle',
  },
];

export const productQuantityData = [
  { produto: 'Notebook Pro 14', quantidade: 32 },
  { produto: 'Cadeira Ergo Flex', quantidade: 18 },
  { produto: 'Headset Studio X', quantidade: 46 },
  { produto: 'Monitor UltraView', quantidade: 27 },
  { produto: 'Teclado Compact', quantidade: 38 },
];

export const salesOverTimeData = [
  { periodo: 'Sem 1', vendas: 24 },
  { periodo: 'Sem 2', vendas: 31 },
  { periodo: 'Sem 3', vendas: 28 },
  { periodo: 'Sem 4', vendas: 42 },
  { periodo: 'Sem 5', vendas: 39 },
  { periodo: 'Sem 6', vendas: 47 },
];
