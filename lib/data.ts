export type Stall = {
  id: string;
  name: string;
  slug: string;
  category: "food" | "accessories" | "games";
  description: string;
  bannerImage: string;
  images: string[];
  ownerName: string;
  ownerPhone: string;
  instagram?: string; // Optional as per requirements
  items?: { name: string; price: string }[]; // Optional
};

export const stalls: Stall[] = [
  // FOOD STALLS
  {
    id: "1",
    name: "Spicy Bites",
    slug: "spicy-bites",
    category: "food",
    description: "The best spicy street food in town! Come try our famous pani puri and chaat.",
    bannerImage: "/images/food.png", // Using existing placeholder for now
    images: ["/images/food.png", "/images/food.png"],
    ownerName: "Rajesh Kumar",
    ownerPhone: "+91 98765 43210",
    instagram: "@spicybites_official",
    items: [
      { name: "Pani Puri", price: "₹50" },
      { name: "Samosa Chaat", price: "₹80" },
      { name: "Masala Dosa", price: "₹120" },
    ],
  },
  {
    id: "2",
    name: "Sweet Cravings",
    slug: "sweet-cravings",
    category: "food",
    description: "Delicious homemade sweets and desserts to satisfy your cravings.",
    bannerImage: "/images/food.png",
    images: ["/images/food.png", "/images/food.png"],
    ownerName: "Priya Singh",
    ownerPhone: "+91 91234 56789",
    items: [
      { name: "Gulab Jamun", price: "₹40" },
      { name: "Jalebi", price: "₹60" },
    ],
  },
  
  // ACCESSORIES STALLS
  {
    id: "3",
    name: "Sparkle & Shine",
    slug: "sparkle-and-shine",
    category: "accessories",
    description: "Handmade jewelry and accessories for every occasion.",
    bannerImage: "/images/accessories.png",
    images: ["/images/accessories.png"],
    ownerName: "Ananya Gupta",
    ownerPhone: "+91 99887 76655",
    instagram: "@sparkle_shine_jewelry",
    items: [
      { name: "Beaded Necklace", price: "₹250" },
      { name: "Silver Earrings", price: "₹150" },
    ],
  },
  
  // GAMES STALLS
  {
    id: "4",
    name: "Target Practice",
    slug: "target-practice",
    category: "games",
    description: "Test your aim and win exciting prizes!",
    bannerImage: "/images/games.png",
    images: ["/images/games.png"],
    ownerName: "Vikram Malhotra",
    ownerPhone: "+91 88776 65544",
    items: [
      { name: "3 Shots", price: "₹50" },
      { name: "10 Shots", price: "₹150" },
    ],
  },
];

export const getStallsByCategory = (category: string) => {
  return stalls.filter((stall) => stall.category === category.toLowerCase());
};

export const getStallBySlug = (slug: string) => {
  return stalls.find((stall) => stall.slug === slug);
};
