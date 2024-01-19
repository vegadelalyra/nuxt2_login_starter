import colors from "vuetify/lib/util/colors";
import { createVuetify } from "vuetify";

export default () => {
  return createVuetify({
    theme: {
      themes: {
        light: {
          primary: colors.purple,
          secondary: colors.blue,
          accent: colors.amber,
          error: colors.red,
          warning: colors.deepPurple,
          info: colors.cyan,
          success: colors.green,
        },
      },
    },
  });
};
