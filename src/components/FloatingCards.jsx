// src/components/FloatingCards.jsx
export default function FloatingCards() {
  const cards = [
    {
      title: "UI/UX Designing",
      description: "Crafting intuitive and aesthetic experiences.",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Brand Strategy",
      description: "Grow your business identity.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Social Media Marketing",
      description: "Engaging digital content to boost reach.",
      color: "from-emerald-400 to-green-500",
    },
    {
      title: "Automation",
      description: "Smart workflows that save time.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="relative py-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl p-5 text-white bg-gradient-to-br ${card.color} shadow-lg transform transition hover:scale-105`}
          >
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
