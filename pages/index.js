import { applyValue, JsonViewer, defineDataType } from '@textea/json-viewer';
import { useCallback, useEffect, useState } from 'react';

import { ocean } from '../shared';

// this url is copied from: https://beta.reactjs.org/learn/passing-props-to-a-component
const avatar = 'https://i.imgur.com/1bX5QH6.jpg';

const longArray = new Array(1000).fill(1);

function aPlusB(a, b) {
  return a + b;
}

const example = {
  avatar,
  string: 'Lorem ipsum dolor sit amet',
  integer: 42,
  float: 114.514,
  bigint: 10086n,
  null: null,
  undefined,
  timer: 0,
  date: new Date('Tue Sep 13 2022 14:07:44 GMT-0500 (Central Daylight Time)'),
  array: [19, 100.86, 'test', NaN, Infinity],
  nestedArray: [
    [1, 2],
    [3, 4],
  ],
  object: {
    'first-child': true,
    'second-child': false,
    'last-child': null,
  },
  fn: aPlusB,
  longArray,
  string_number: '1234',
};

const KeyRenderer = ({ path }) => {
  return (
    <del aria-label="I dont like this number">&quot;{path.slice(-1)}&quot;</del>
  );
};
KeyRenderer.when = (props) => props.value === 114.514;

const imageType = defineDataType({
  is: (value) => {
    return typeof value === 'string' && value.startsWith('https://i.imgur.com');
  },
  Component: (props) => {
    return <img height="50px" src={props.value} alt={props.value} />;
  },
});

const IndexPage = () => {
  const [src, setSrc] = useState(() => example);

  const handleChange = useCallback((path, oldValue, newValue) => {
    setSrc((src) => applyValue(src, path, newValue));
  }, []);

  useEffect(() => {
    const loop = () => {
      setSrc((src) => ({
        ...src,
        timer: src.timer + 1,
      }));
    };
    const id = setInterval(loop, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <JsonViewer
        value={src}
        editable={true}
        theme={'auto'}
        indentWidth="3"
        highlightUpdates={true}
        onChange={handleChange}
        keyRenderer={KeyRenderer}
        valueTypes={[imageType]}
      />
    </div>
  );
};

export default IndexPage;
