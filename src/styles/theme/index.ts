import db from '../../../db.json';

export default {
  colors: {
    primary: db.theme.colors.primary,
    secondary: db.theme.colors.secondary,
    mainBg: db.theme.colors.mainBg,
    contrastText: db.theme.colors.contrastText,
    wrong: db.theme.colors.wrong,
    success: db.theme.colors.success
  },
  borderRadius: db.theme.borderRadius,
  bg: db.bg
};
