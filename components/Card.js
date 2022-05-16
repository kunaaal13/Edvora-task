import { calcDistance } from '../utils/helper';
import map from '../public/assets/map.png';
import Image from 'next/image';

function Card(props) {
  const { id, origin_station_code, station_path, date, state, city, station_code } = props;

  //to change date format to json
  const dt = new Date(date);
  var d = new Date(
    Date.UTC(
      dt.getFullYear(),
      dt.getMonth(),
      dt.getDate(),
      dt.getHours(),
      dt.getMinutes(),
      dt.getSeconds(),
      dt.getMilliseconds()
    )
  );

  const _date = d.toDateString().split(' ');

  const _time = d.toTimeString().substring(0, 5);
  const txtDate = `${_date[2]}th ${_date[1]} ${_date[3]} ${_time}`;

  const distance = calcDistance(station_path, station_code);
  return (
    <div className="components">
      <div className="flex-wrap relative md:flex p-4 bg-[#171717] rounded-lg mb-4 text-[#d3cece]">
        <div className=" w-full h-[190px] mb-2 relative sm:max-w-[296px] rounded-md sm:mr-11 md:mb-0 sm:h-[170px]">
          <Image src={map} alt="" layout="fill" className="w-full object-fill" />
        </div>

        <div className="flex flex-col space-y-2 sm:space-y-3 text-base">
          <p className="">
            Ride Id : <span className="text-white">{id}</span>
          </p>

          <p className="">
            Origin Station : <span className="text-white">{origin_station_code}</span>
          </p>

          <p className="">
            station_path : <span className="text-white">{`[${station_path.join(', ')}]`}</span>
          </p>

          <p className="">
            Date: <span className="text-white">{txtDate}</span>
          </p>

          <p className="">
            Distance: <span className="text-white">{distance}</span>
          </p>
        </div>

        <div className="absolute top-7 right-6">
          <span className="mr-6 py-1 px-2 bg-[#0000008f] rounded-2xl">{city}</span>
          <span className="py-1 px-2 bg-[#0000008f] rounded-2xl">{state}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
