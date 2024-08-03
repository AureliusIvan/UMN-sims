import {
  useState,
  useEffect,
  useContext
} from 'react';
import {AllContext} from './components/Value/CoinContext';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const {playing, setPlaying} = useContext(AllContext);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio, setPlaying]);

  return [playing, toggle];
};

const Player = ({url}) => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useAudio(url);
};

export default Player;
