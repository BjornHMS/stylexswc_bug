"use client";
import * as stylex from '@stylexjs/stylex';
import { GRAYSCALE } from "../styles/tokens.stylex";
import { Button } from "components/button/Button";
import { useCallback, useState } from 'react';
import { Button_Record } from 'components/button/Button_Record';
import { Button_Nullish } from 'components/button/Button_Nullish';
import { Button_Record_From_Import } from 'components/button/Button_Record_From_Import';
import { Button_Record_From_Import_Workaround } from 'components/button/Button_Record_From_Import_Workaround';

const s = stylex.create({
  h1: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  page: {
    backgroundColor: GRAYSCALE.gray1,
    display: 'grid',
    width: 600,
    justifyItems: 'center',
    gridGap: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#3b3030',
  },
  works: {
    backgroundColor: '#7aed7a',
  },
  error: {
    backgroundColor: '#f17373',
  }
});

const comps = {
  "1": Button, 
  "2": Button_Record, 
  //"3": Button_Nullish, 
  //"4": Button_Record_From_Import,
  "5": Button_Record_From_Import_Workaround
};

export default function Home() {
  const [type, setType] = useState('1');

  const onSelect = useCallback((e: any) => {
    setType(e.target.value)
  }, []);

  const Component = comps[type as keyof typeof comps] ?? (() => (<div>Uncomment comps.{type}</div>));

  return (
    <div {...stylex.props(s.page)}>
      <div>
        <h1 {...stylex.props(s.h1)}>Bug Checker</h1>
        <select onChange={onSelect}  {...stylex.props(["3","4"].includes(type) ? s.error : s.works)}>
          <option value="1" {...stylex.props(s.works)}>Works #1: Ternary/Imported Record</option>
          <option value="2" {...stylex.props(s.works)}>Works #2: Ternary/Same File Record</option>
          <option value="3" {...stylex.props(s.error)}>Bug #1: Nullish/Imported Record</option>
          <option value="4" {...stylex.props(s.error)}>Bug #2: Ternary/Record from imports</option>
          <option value="5" {...stylex.props(s.works)}>Works #3: Ternary/Record from imports (not first param)</option>
        </select>
      </div>
      <Component key={type}/>
    </div>
  );
}
