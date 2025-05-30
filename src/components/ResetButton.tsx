import { useGameBoardStore } from '@/store/useGameBoard';
import '@/styles/ResetButton.css';

export const ResetButton = () => {
  const handleReset = useGameBoardStore(state => state.resetGame);
  return (
    <button onClick={() => handleReset()} className='button'>
      Shuffle Pieces
    </button>
  );
};
