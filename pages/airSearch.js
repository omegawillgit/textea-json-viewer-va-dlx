import { JsonViewer } from '@textea/json-viewer';
import { useCallback, useEffect, useState } from 'react';

import airSearch from '../data/airSearch.json';
import { originDestinationType } from '../dataType/originDestination';
import { uriType } from '../dataType/uri';

const IndexPage = () => {
  const [src, setSrc] = useState(() => airSearch);

  return (
    <JsonViewer
      value={src}
      editable={false}
      theme={'auto'}
      indentWidth="2"
      highlightUpdates={true}
      defaultInspectDepth={3}
      valueTypes={[originDestinationType, uriType]}
    />
  );
};

export default IndexPage;
