import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface IThemeInterface {
  blueColor: string;
}

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

// theme is now fully typed
export { css, keyframes, createGlobalStyle, ThemeProvider };
export default styled;
