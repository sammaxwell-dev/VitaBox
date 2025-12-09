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

    // Bundles
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
    },
    {
        id: 'refill',
        name: 'The Refill',
        fullName: 'Big Sizzle',
        description: 'Keep it flowing. A larger format for our daily cooking oil.',
        price: 28,
        badge: 'REFILL',
        image: '/assets/sizzle_vitabox_1765228905529.png', // Fallback
        bgColor: '#dbe655',
        textColor: 'text-graza-darkGreen',
        isBundle: true,
        contents: ['sizzle']
    },

    // Gift Sets
    {
        id: 'dinner-party',
        name: 'Dinner Party',
        fullName: 'The Host Pack',
        description: 'Everything needed to host the perfect evening. Chips, oils, and vibes included.',
        price: 65,
        badge: 'GIFT SET',
        image: '/assets/shop_dinner_party.png', // Needs asset or placeholder
        bgColor: '#1a237e', // Deep Blue
        textColor: 'text-white',
        isBundle: true,
        contents: ['sizzle', 'drizzle']
    },
    {
        id: 'sunday-reset',
        name: 'Sunday Reset',
        fullName: 'Self Care Kit',
        description: 'Peace won\'t wait. Tea, candle, honey, and a mug for your soul.',
        price: 65, // Price not explicitly in KB list but inferred or set standard
        badge: 'RELAX',
        image: '/assets/shop_honey.png', // Needs asset
        bgColor: '#8d6e63', // Brownish
        textColor: 'text-white',
        isBundle: true,
        contents: ['beebox']
    },
    {
        id: 'master-chef',
        name: 'Master Chef',
        fullName: 'The Culinary Set',
        description: 'Your hands work magic, we just provide the tools. Oils, vinegar, and spices.',
        price: 85, // Estimated
        badge: 'CHEF CHOICE',
        image: '/assets/shop_trio_set.png', // Fallback
        bgColor: '#212121', // Dark
        textColor: 'text-white',
        isBundle: true,
        contents: ['sizzle', 'drizzle', 'zing', 'spark']
    },
    {
        id: 'health-hero',
        name: 'Health Hero',
        fullName: 'Wellness Pack',
        description: 'Long happy life is the best gift. Honey, Vinegar, Spices for your health.',
        price: 75, // Estimated
        badge: 'WELLNESS',
        image: '/assets/shop_vinegar.png', // Fallback
        bgColor: '#4caf50', // Green
        textColor: 'text-white',
        isBundle: true,
        contents: ['beebox', 'zing', 'spark']
    }
];
