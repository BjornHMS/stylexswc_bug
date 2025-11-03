import * as stylex from '@stylexjs/stylex';

export const BRAND = stylex.defineVars({
  primary: '#11223A',
  primary20: '#172E4F',
  primary25: '#1D3A63',
  primary30: '#234576',
  primary35: '#28518A',
  primary40: '#2E5C9E',
  primary45: '#3468B1',
  primary50: '#3A74C5',
  primary55: '#4E82CB',
  primary60: '#618FD1',
  primary65: '#759DD7',
  primary70: '#89ABDC',
  primary75: '#9CB9E2',
  primary80: '#B0C7E8',
  primary85: '#C4D5EE',
  primary90: '#D8E3F3',
  primary95: '#EBF1F9',
  primary96: '#EFF4FA',
  primary98: '#F7FAFD',
});

export const GRAYSCALE = stylex.defineVars({
  white: '#FFFFFF',
  gray1: '#F5F5F5',
  gray2: '#E0E0E0',
  gray3: '#CCCCCC',
  gray4: '#B8B8B8',
  gray5: '#A3A3A3',
  gray6: '#8F8F8F',
  gray7: '#7A7A7A',
  gray8: '#666666',
  gray9: '#5A5A5A',
  gray10: '#3D3D3D',
  gray11: '#292929',
  gray12: '#141414',
});

export const BUTTON_TEXT = stylex.defineVars({
  blue: BRAND.primary50,
  white: GRAYSCALE.white,
  disabled: BRAND.primary85,
});