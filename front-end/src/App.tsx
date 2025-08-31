import React from 'react';
import CardGrid from './components/layout/CardGrid';

function App() {
  const items = [
    { id: 'insaat', title: 'İNŞAAT', description: 'Projeler ve hizmetler' },
    { id: 'mimarlik', title: 'MİMARLIK', description: 'Tasarım ve danışmanlık' },
    { id: 'celik', title: 'ÇELIK KONSTRÜKSİYON', description: 'Üretim ve montaj' },
  ];

  return <CardGrid items={items} />;
}

export default App;
