import { JsonViewer, defineDataType } from '@textea/json-viewer';
import { useCallback, useEffect, useState } from 'react';

import airSearch from '../data/airSearch.json';

import { itinerarySchema } from '../schemas/itinerary';

const itineraryType = defineDataType({
  is: (value) => {
    return itinerarySchema.safeParse(value).success;
  },
  Component: (props) => {
    return <>{props}</>;
  },
});

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
