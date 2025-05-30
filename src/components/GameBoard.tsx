import { useGameBoardStore } from '@/store/useGameBoard';
import '@/styles/GameBoard.css';

export const GameBoard = () => {
  const cells = useGameBoardStore(state => state.cells);
  const handleClick = useGameBoardStore(state => state.handleClick);
  return (
    <section className='gameboard'>
      {cells.map((num, index) => {
        const className =
          typeof num === 'number' ? 'cell isNumber' : 'cell isNull';
        return (
          <aside
            onClick={() => handleClick(index)}
            key={crypto.randomUUID()}
            className={className}
          >
            {num}
          </aside>
        );
      })}
    </section>
  );
};
