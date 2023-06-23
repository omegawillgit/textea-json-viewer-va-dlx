import { JsonViewer } from '@textea/json-viewer';
import { useCallback, useEffect, useState } from 'react';

import airSearch from '../data/airSearch.json';
import { itineraryType } from '../dataType/itinerary';

const IndexPage = () => {
  const [src, setSrc] = useState(() => airSearch);

  return (
    <div>
      <JsonViewer
        value={src}
        editable={true}
        theme={'auto'}
        indentWidth="2"
        highlightUpdates={true}
        defaultInspectDepth={3}
        valueTypes={[itineraryType]}
      />
    </div>
  );
};

export default IndexPage;
