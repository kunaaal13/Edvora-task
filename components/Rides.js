import { useApi } from '../context/fetchData';

import { sortByNearest } from '../utils/helper';
import Card from './Card';
import { NoResult } from './NoResult';

export const Rides = () => {
  const { user, getRides } = useApi();
  const sortN = sortByNearest(getRides(), user.station_code);

  return (
    <div>
      {sortN.length ? (
        sortN.map((s, i) => <Card key={i} station_code={user.station_code} {...s} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
};
