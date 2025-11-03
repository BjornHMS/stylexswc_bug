import * as stylex from '@stylexjs/stylex';
import { BUTTON_TEXT, BRAND, GRAYSCALE } from '../tokens.stylex';

export const BUTTON = stylex.defineVars({
  stroke: 'transparent',
  default: 'transparent',
  default_text: BUTTON_TEXT.white,
  hover: 'transparent',
  hover_text: BUTTON_TEXT.white,
  pressed: 'transparent',
  pressed_text: BUTTON_TEXT.white,
  disabled: BRAND.primary96,
  disabled_text: BUTTON_TEXT.disabled,
  disabled_stroke: 'transparent',
});

export const BUTTON_PRIMARY = stylex.createTheme(BUTTON, {
  default: BRAND.primary50,
  hover: BRAND.primary35,
  pressed: BRAND.primary30,
});

export const BUTTON_SECONDARY = stylex.createTheme(BUTTON, {
  default: BRAND.primary90,
  default_text: BUTTON_TEXT.blue,
  hover: BRAND.primary85,
  hover_text: BUTTON_TEXT.blue,
  pressed: BRAND.primary65,
  pressed_text: BUTTON_TEXT.white,
});

export const buttonTheme = {
  primary: BUTTON_PRIMARY,
  secondary: BUTTON_SECONDARY,
}