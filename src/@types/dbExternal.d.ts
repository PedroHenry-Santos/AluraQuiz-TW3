export interface DbExternal {
  bg: string;
  title: string;
  description: string;
  questions: {
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: string[];
  }[];
  external: string[];
  theme: {
    colors: {
      primary: string;
      secondary: string;
      mainBg: string;
      contrastText: string;
      wrong: string;
      success: string;
    };
    borderRadius: string;
  };
}
