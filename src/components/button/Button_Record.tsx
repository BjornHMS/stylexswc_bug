import * as stylex from '@stylexjs/stylex';
import { useCallback, useState } from 'react';
import { BUTTON } from 'styles/themes/button.stylex';
import { BRAND, BUTTON_TEXT } from 'styles/tokens.stylex';

const s = stylex.create({
  button: (opt?: {
    theme: 'primary' | 'secondary';
    size: 'large' | 'xlarge';
  }) => ({
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    display: 'grid',

    borderRadius: {
      xlarge: 16,
      large: 12,
    }[opt?.size ? opt.size : 'large'],

    padding: {
      xlarge: '28px 40px',
      large: '16px 40px',
    }[opt?.size ? opt.size : 'large'],

    color: {
      default: BUTTON.default_text,
      ':hover:not(:active)': BUTTON.hover_text,
      ':active': BUTTON.pressed_text,
    },

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: {
      default: `${BUTTON.stroke}`,
      ':disabled': `${BUTTON.disabled_stroke}`,
    },

    backgroundColor: {
      default: BUTTON.default,
      ':hover:not(:active)': BUTTON.hover,
      ':active': BUTTON.pressed,
    },
  }),
  list: {
    justifySelf: 'left',
    paddingLeft: 20,
  }
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

const B1 = stylex.create({
  Regular: {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '24px',
    letterSpacing: '-0.01em',
  },
  Bold: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '24px',
    letterSpacing: '-0.01em',
  },
});

const B2 = stylex.create({
  Regular: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '22px',
    letterSpacing: '-0.01em',
  },
});

const typography = {
  xlarge: B1,
  large: B2,
};

export const Button_Record: React.FC = () => {
  const [state, setState] = useState({
    count: 0,
    theme: 'primary' as keyof typeof buttonTheme,
    size: 'large' as keyof typeof typography,
  });

  const onClick = useCallback(() => {
    setState(prev => {
      const curr = prev.count < 3 ? prev.count + 1 : 0;
      let next = {...prev, count: curr};
      switch (curr) {
        case 0 : {
          next.theme = 'primary';
          next.size = 'large';
          break;
        }
        case 1 : {
          next.size = 'xlarge';
          break;
        }
        case 2 : {
          next.theme = 'secondary';
          next.size = 'large';
          break;
        }
        case 3 : {
          next.size = 'xlarge';
          break;
        }
      }
      return next;
    })
  }, []);

  return (
    <>
      <div {...stylex.props(s.list)}>
        This Component:
        <ul>
          <li>Creates a record with styles created in the Button.tsx file.</li>
          <li>Uses ternary operator in styleX.create</li>
        </ul>
      </div>
      <button
        {...stylex.props(
          buttonTheme[state.theme],
          typography[state.size].Regular,
          s.button(state),
        )}
        onClick={onClick}
      >
        Click Me!
      </button>
    </>
  );
}