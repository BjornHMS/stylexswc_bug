import * as stylex from '@stylexjs/stylex';

export const B1 = stylex.create({
  Regular: {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '24px',
    letterSpacing: '-0.01em',
  },
});

export const B2 = stylex.create({
  Regular: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    letterSpacing: '-0.01em',
  },
});

export const typography = {
  xlarge: B1,
  large: B2,
};