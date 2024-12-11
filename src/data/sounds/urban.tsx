import { BiSolidTraffic } from 'react-icons/bi/index';
import { FaCity, FaRoad } from 'react-icons/fa/index';
import { PiRoadHorizonFill } from 'react-icons/pi/index';
import { BsSoundwave, BsPeopleFill } from 'react-icons/bs/index';
import { RiSparkling2Fill } from 'react-icons/ri/index';

import type { Category } from '../types';

export const urban: Category = {
  icon: <FaCity />,
  id: 'urban',
  sounds: [
    {
      icon: <PiRoadHorizonFill />,
      id: 'highway',
      label: '铁路',
      src: '/sounds/urban/highway.mp3',
    },
    {
      icon: <FaRoad />,
      id: 'road',
      label: '公路',
      src: '/sounds/urban/road.mp3',
    },
    // {
    //   icon: <PiSirenBold />,
    //   id: 'ambulance-siren',
    //   label: '救护车',
    //   src: '/sounds/urban/ambulance-siren.mp3',
    // },
    {
      icon: <BsSoundwave />,
      id: 'busy-street',
      label: '繁忙街道',
      src: '/sounds/urban/busy-street.mp3',
    },
    {
      icon: <BsPeopleFill />,
      id: 'crowd',
      label: '人群',
      src: '/sounds/urban/crowd.mp3',
    },
    {
      icon: <BiSolidTraffic />,
      id: 'traffic',
      label: '交通',
      src: '/sounds/urban/traffic.mp3',
    },
    {
      icon: <RiSparkling2Fill />,
      id: 'fireworks',
      label: '烟花',
      src: '/sounds/urban/fireworks.mp3',
    },
  ],
  title: '城市',
};
