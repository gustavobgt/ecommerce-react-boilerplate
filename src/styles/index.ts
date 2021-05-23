import { light, dark } from './colors';
import { space, lineHeights } from './spacing';
import { sizes } from './sizes';
import { fonts, fontWeights, fontSizes } from './fonts';
import GlobalStyle from './global';
import { Theme } from './types';

export const getTheme = (theme: string): Theme => ({
    colors: theme === 'light' ? light : dark,
    space,
    lineHeights,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
});

export default GlobalStyle;
