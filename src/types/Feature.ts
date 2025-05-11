export interface KeyFeature {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}


interface Point {
    title: string;
    description: string;
}

export interface Feature extends KeyFeature {
    heading: string;
    pointsHeading: string;
    points: [Point];
    testimonial: {
        name: string;
        testimony: string;
    };
    tagline: string;
    hashtags: [string];
}

export interface KeyFeatureID extends KeyFeature {
    id: string;
}

export interface FetchedFeature extends Feature {
    id: string;
}
