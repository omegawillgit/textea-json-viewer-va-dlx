import { useCallback, useEffect, useState } from 'react';
import { CustomJsonViewer } from '../components/CustomJsonViewer';

import airSearch from '../data/airSearch.json';

const IndexPage = () => {
  const [src, setSrc] = useState(() => airSearch);

  return <CustomJsonViewer value={src} />;
};

export default IndexPage;
