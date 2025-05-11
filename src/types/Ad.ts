export interface Ad {
    id: string;
    cta: string;
    title: string;
    description: string;
    subheading: string;
    features: [AdFeatures];
    tagline: string;
    footer: string;
    hashtags:[string];
}

interface AdFeatures {
    title: string;
    description: string;
}