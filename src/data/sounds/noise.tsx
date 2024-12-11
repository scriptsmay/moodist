import { GiSoundWaves } from 'react-icons/gi/index';
import { BsSoundwave } from 'react-icons/bs/index';

import type { Category } from '../types';

export const noise: Category = {
  icon: <BsSoundwave />,
  id: 'noise',
  sounds: [
    {
      icon: <GiSoundWaves />,
      id: 'white-noise',
      label: '白噪声',
      src: '/sounds/noise/white-noise.wav',
    },
    {
      icon: <GiSoundWaves />,
      id: 'pink-noise',
      label: '粉红噪声',
      src: '/sounds/noise/pink-noise.wav',
    },
    {
      icon: <GiSoundWaves />,
      id: 'brown-noise',
      label: '棕色噪声',
      src: '/sounds/noise/brown-noise.wav',
    },
  ],
  title: '噪声',
};
