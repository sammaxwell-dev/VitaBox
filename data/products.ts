export interface Product {
    id: string;
    name: string;
    fullName: string;
    description: string;
    price: number;
    badge?: string;
    image: string;
    bgColor: string;
    textColor: string;
    tasteProfile?: string[];
    isBundle?: boolean;
    contents?: string[];
}

export const products: Product[] = [
    // Singles
    {
        id: 'drizzle',
        name: 'Drizzle',
        fullName: 'Extra Virgin Olive Oil',
        description: 'Made for eating, never heating. Harvested from young green olives for a bright, grassy flavor with a peppery kick.',
        price: 21,
        badge: 'FINISHING OIL',
        image: '/assets/drizzle_vitabox_1765228886215.png',
        bgColor: '#7cb342', // Green
        textColor: 'text-white',
        tasteProfile: ['Grass', 'Pepper', 'Tomato Leaf', 'Almond']
    },
    {
        id: 'sizzle',
        name: 'Sizzle',
        fullName: 'Extra Virgin Olive Oil',
        description: 'Use it every day, in every way. Harvested from ripe olives for a smooth, rounded flavor. The workhorse of the kitchen.',
        price: 16,
        badge: 'COOKING OIL',
        image: '/assets/sizzle_vitabox_1765228905529.png',
        bgColor: '#dbe655', // Lime
        textColor: 'text-graza-darkGreen',
        tasteProfile: ['Smooth', 'Ripe Olive', 'Buttery', 'Mild']
    },
    {
        id: 'frizzle',
        name: 'Frizzle',
        fullName: 'High Heat Cooking Oil',
        description: 'Your new high heat kitchen hero. Withstands high temps without smoking. Perfect for searing steaks and wok cooking.',
        price: 14,
        badge: 'HIGH HEAT',
        image: '/assets/frizzle_vitabox_1765228919925.png',
        bgColor: '#e65100', // Orange-ish
        textColor: 'text-white',
        tasteProfile: ['Neutral', 'Crisp']
    },
    {
        id: 'beebox',
        name: 'BeeBox',
        fullName: 'Raw Wildflower Honey',
        description: 'Sweetness that heals. 100% natural, raw, unpasteurized honey collected far from civilization.',
        price: 24,
        badge: 'RAW HONEY',
        image: '/assets/shop_honey.png', // Placeholder based on KB, need to verify if exists or use generic
        bgColor: '#ffb300', // Amber
        textColor: 'text-graza-darkGreen',
        tasteProfile: ['Floral', 'Sweet', 'Wildflower']
    },
    {
        id: 'zing',
        name: 'Zing',
        fullName: 'Apple Cider Vinegar',
        description: 'The acid trip your gut needs. Living vinegar with "the mother". Sharp, honest, and invigorating.',
        price: 18,
        badge: 'LIVING VINEGAR',
        image: '/assets/shop_vinegar.png', // Placeholder
        bgColor: '#f44336', // Red
        textColor: 'text-white',
        tasteProfile: ['Acidic', 'Sharp', 'Apple']
    },
    {
        id: 'spark',
        name: 'Spark',
        fullName: 'Adaptogen Spice Blend',
        description: 'Turn any meal into superfood. A blend of turmeric, black pepper, and ginger with adaptogens for energy.',
        price: 22,
        badge: 'MAGIC DUST',
        image: '/assets/shop_spices.png', // Placeholder
        bgColor: '#ff9800', // Orange
        textColor: 'text-graza-darkGreen',
        tasteProfile: ['Spicy', 'Earthy', 'Turmeric']
    },

    // Bundles (for reference or if we want to treat them as products too)
    {
        id: 'duo',
        name: 'The Duo',
        fullName: 'Sizzle + Drizzle',
        description: 'The perfect pair. Sizzle for cooking, Drizzle for finishing. The only two olive oils you need.',
        price: 35,
        badge: 'BEST SELLER',
        image: '/assets/shop_duo_set.png',
        bgColor: '#a8e6a1',
        textColor: 'text-graza-darkGreen',
        isBundle: true,
        contents: ['sizzle', 'drizzle']
    },
    {
        id: 'trio',
        name: 'The Trio',
        fullName: 'The Complete Collection',
        description: 'The complete kitchen collection. Sizzle, Drizzle, and Frizzle (or infusion).',
        price: 50,
        badge: 'BEST VALUE',
        image: '/assets/shop_trio_set.png',
        bgColor: '#f2c94c',
        textColor: 'text-graza-darkGreen',
        isBundle: true,
        contents: ['sizzle', 'drizzle', 'frizzle']
    },
    {
        id: 'starter',
        name: 'The Starter Kit',
        fullName: 'Sizzle + Drizzle + Spout',
        description: 'Everything you need to get cooking.',
        price: 40,
        badge: 'KIT',
        image: '/assets/shop_duo_set.png', // Fallback
        bgColor: '#e6e6e6',
        textColor: 'text-graza-darkGreen',
        isBundle: true,
        contents: ['sizzle', 'drizzle']
    }
];
