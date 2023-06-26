import { JsonViewer } from '@textea/json-viewer';
import { useCallback, useEffect, useState } from 'react';

import airSearch from '../data/airSearch.json';
import { originDestinationType } from '../dataType/originDestination';

const IndexPage = () => {
  const [src, setSrc] = useState(() => airSearch);

  return (
    <div>
      <JsonViewer
        value={src}
        editable={false}
        theme={'auto'}
        indentWidth="2"
        highlightUpdates={true}
        defaultInspectDepth={3}
        valueTypes={[originDestinationType]}
      />
    </div>
  );
};

export default IndexPage;
