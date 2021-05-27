import { light, dark } from 'styles/colors';
import { space, lineHeights } from 'styles/spacing';
import { sizes } from 'styles/sizes';
import { fonts, fontWeights, fontSizes } from 'styles/fonts';
import GlobalStyle from 'styles/global';
import { Theme } from 'styles/types';

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
