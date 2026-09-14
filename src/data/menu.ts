export const categories = [
  "Todos",
  "Cafés calientes",
  "Cafés fríos",
  "Para acompañar",
] as const;
export type Category = (typeof categories)[number];
export interface MenuItem {
  name: string;
  price: number;
  category: Exclude<Category, "Todos">;
  description: string;
  image: string;
  tag?: string;
}

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`;

export const menu: MenuItem[] = [
  {
    name: "Espresso",
    price: 120,
    category: "Cafés calientes",
    description: "Pequeño, intenso y lleno de carácter.",
    image: photo("photo-1705952285570-113e76f63fb0"),
    tag: "EL ESENCIAL",
  },
  {
    name: "Latte",
    price: 170,
    category: "Cafés calientes",
    description: "El equilibrio perfecto entre café y leche.",
    image: photo("photo-1593443320739-77f74939d0da"),
    tag: "CLÁSICO DE LA CASA",
  },
  {
    name: "Café helado",
    price: 190,
    category: "Cafés fríos",
    description: "Tu pausa de siempre, bien fresca.",
    image: photo("photo-1605046762635-8d7cf41f9a68"),
  },
  {
    name: "Irlandés",
    price: 290,
    category: "Cafés calientes",
    description: "Un clásico para disfrutar sin apuro.",
    image:
      "https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Mocha",
    price: 260,
    category: "Cafés calientes",
    description: "Café y chocolate: una muy buena idea.",
    image: photo("photo-1632845407875-10b4d85e6bf8"),
  },
  {
    name: "Tostado de jamón y queso",
    price: 200,
    category: "Para acompañar",
    description: "Dorado por fuera. Un clásico por dentro.",
    image: photo("photo-1737513916865-63c7fd3b67a7"),
  },
  {
    name: "Carrot Cake",
    price: 250,
    category: "Para acompañar",
    description: "Una porción para hacer una buena pausa.",
    image: photo("photo-1593855499713-52d4a946e4c3"),
  },
  {
    name: "Brownie",
    price: 220,
    category: "Para acompañar",
    description: "Ese antojo de chocolate que nunca falla.",
    image: photo("photo-1606313564573-104197cf8f91"),
  },
  {
    name: "Lemon pie",
    price: 250,
    category: "Para acompañar",
    description: "El lado dulce y cítrico de tu día.",
    image: photo("photo-1681329142517-6daaa56d3670"),
  },
];
