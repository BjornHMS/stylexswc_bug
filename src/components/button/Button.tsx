import { BUTTON, buttonTheme } from 'styles/themes/button.stylex';
import * as stylex from '@stylexjs/stylex';
import { useCallback, useState } from 'react';
import { typography } from 'styles/typography.stylex';

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
    borderColor: BUTTON.stroke,

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

export const Button: React.FC = () => {
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
          <li>Imports a record with styles created in the same file.</li>
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