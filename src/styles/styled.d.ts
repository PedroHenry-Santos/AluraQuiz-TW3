import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secundary: string;
      mainBg: string;
      contrastText: string;
      wrong: string;
      success: string;
    };
    borderRadius: string;
    background: string;
  }
}
