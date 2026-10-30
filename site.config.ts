import type { SiteConfig } from "@/lib/types";

const g = (n: number, width: number, height: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width, height, alt, caption, href });

export const site: SiteConfig = {
  name: "AllyGrooms",
  tagline: "Home based boutique grooming for small dogs in Brampton, by a certified pet stylist.",
  category: "Small dog grooming",
  schemaType: "LocalBusiness",
  area: "Brampton, ON",
  siteUrl: "https://allygrooms.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8a5fa0" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Boutique salon in Brampton",
    headline: "Fresh, fluffy and all smiles",
    subhead: "Private, one on one grooming for small dogs with premium salon quality products. Send a DM to book your pup's next groom.",
    images: [
      { src: "/images/post-1.jpg", alt: "Smiling white pup after a fresh groom" },
      { src: "/images/post-2.jpg", alt: "Three little pups in Halloween bandanas" },
      { src: "/images/post-7.jpg", alt: "Happy pup in autumn leaves" },
    ],
    secondaryCta: { label: "Meet the pups", href: "#gallery" },
  },

  highlights: ["Certified pet stylist", "Private small dog grooming", "Premium salon quality products", "Brampton, DM to book"],

  about: {
    title: "A private salon made for little dogs",
    body: [
      "AllyGrooms is a home based boutique salon in Brampton for small dogs. Every pup gets a calm, private groom from a certified pet stylist, with premium salon quality products.",
      "From teddy bear faces to a fresh fall look, each groom ends with a happy pup who is ready to show off. Seasonal styled photos are part of the fun.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Freshly groomed pup with pumpkins" },
  },

  menu: {
    label: "Services",
    title: "Grooming for small dogs",
    variant: "list",
    showPrices: false,
    priceNote: "Send a DM for pricing for your pup.",
    groups: [
      {
        title: "Grooming",
        items: [
          { name: "Full groom", description: "For small dogs, finished with premium salon quality products" },
          { name: "Haircut and trim", description: "Teddy bear faces and fresh seasonal looks" },
          { name: "Bath and fluff" },
        ],
      },
    ],
  },

  gallery: {
    title: "Freshly groomed",
    items: [
      g(1, 1080, 1080, "Smiling pup", "That smile says it all", "https://www.instagram.com/p/DfDiBvMhPEf/"),
      g(2, 1080, 1080, "Livi, Loulou and Leo", "Three little boos", "https://www.instagram.com/p/DfDQQTdBMn8/"),
      g(3, 1080, 1080, "Romeo in a Halloween tie", "Handsome Romeo", "https://www.instagram.com/p/DfBEjTyGplW/"),
      g(4, 640, 1136, "Nemo before his groom", "Nemo's makeover", "https://www.instagram.com/p/DfBCgNrt3Ka/"),
      g(6, 1080, 1080, "Misha with pumpkins", "Pumpkin spice and everything nice", "https://www.instagram.com/p/Dejw0_NuBkX/"),
      g(7, 1080, 1080, "Kobe in autumn leaves", "Fall with Kobe", "https://www.instagram.com/p/DejwVH3O5uc/"),
      g(8, 640, 1136, "Max before his haircut", "Max's fresh new look", "https://www.instagram.com/p/DehGmf8OoTE/"),
      g(9, 640, 1136, "Sky on the grooming table", "Sky, perfectly pampered", "https://www.instagram.com/p/Deeh0dvOxej/"),
      g(11, 640, 1136, "Pup after a trim", "From fluffy to fresh", "https://www.instagram.com/p/Deb9cYAOf5a/"),
      g(12, 1080, 1080, "Kailee and Coco", "Kailee and Coco", "https://www.instagram.com/p/DeaWsrBR4O_/"),
    ],
  },

  instagram: { handle: "ac_k9stylist", embeds: [] },

  order: {
    label: "How to book",
    title: "Book your pup's groom",
    intro: "All bookings are by Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi AllyGrooms! I would like to book a groom.\nPup's name and breed:\nSize or weight:\nPreferred date:\nGroom or style idea:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram with your pup's breed, size and the date you would like." },
    { q: "Where are you located?", a: "We are a home based boutique salon in Brampton, near Chinguacousy Rd." },
    { q: "Which dogs do you groom?", a: "We specialize in private grooming for small dogs." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "AllyGrooms | Small dog grooming in Brampton",
    description: "AllyGrooms is a home based boutique salon in Brampton offering private small dog grooming by a certified pet stylist. Send a DM on Instagram to book.",
    keywords: ["dog grooming Brampton", "small dog groomer Brampton", "private dog grooming Brampton", "home dog grooming Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
