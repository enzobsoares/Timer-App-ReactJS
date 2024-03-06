import 'styled-components';
import {defaultTheme} from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

// Toda vez que eu importar o styled-components num em outro arquivo, 
// a  tipagem que ele puxará está logo abaixo sobreescrevida

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}