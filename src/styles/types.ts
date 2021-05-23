export interface Colors {
    title: string;

    brand: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    ui: {
        primary: string;
        secondary: string;
        tertiary: string;
        white: string;
        black: string;
        disabled: string;
        error: string;
        success: string;
    };
    bg: {
        primary: string;
        secondary: string;
    };
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        error: string;
        success: string;
    };
}

export interface Space {
    [index: number]: string;
}

export interface LineHeights {
    title: string;
    copy: string;
}

export interface Sizes {
    [index: number]: string;
}

export interface Fonts {
    body: string;
    heading: string;
    monospace: string;
}

export interface FontWeights {
    regular: number;
    medium: number;
    bold: number;
}

export interface FontSizes {
    caption: string;
    button: string;
    body: string;
    title: string;
    h5: string;
    h4: string;
    h3: string;
    h2: string;
    h1: string;
}

export type Theme = {
    colors: Colors;
    space: Space;
    lineHeights: LineHeights;
    sizes: Sizes;
    fonts: Fonts;
    fontWeights: FontWeights;
    fontSizes: FontSizes;
};
