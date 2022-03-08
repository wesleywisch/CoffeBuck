import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string,
      textTitle: string,
      textDescription: string,
      gray: string,
      background: string,
      card: string,
      colorButton: string,
    }
  }
}