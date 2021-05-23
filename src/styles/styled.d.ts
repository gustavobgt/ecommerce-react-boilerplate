import 'styled-components';
import {
    Colors,
    Space,
    LineHeights,
    Sizes,
    Fonts,
    FontWeights,
    FontSizes,
} from './types';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        space: Space;
        lineHeights: LineHeights;
        sizes: Sizes;
        fonts: Fonts;
        fontWeights: FontWeights;
        fontSizes: FontSizes;
    }
}
