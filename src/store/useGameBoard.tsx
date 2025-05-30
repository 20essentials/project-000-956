import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const ARRAY_LENGTH = 16;
const initialArray = [
  ...Array.from({ length: ARRAY_LENGTH - 1 }, (_, i) => i + 1),
  null
];

const initialState = {
  cells: randomArray([...initialArray])
};

type ArrayState = (number | null)[];

function verifyVictory(arr: ArrayState) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let isEqual = initialArray[i] === arr[i];
    if (isEqual) counter++;
  }

  return counter === ARRAY_LENGTH;
}

function randomArray(arr: ArrayState) {
  return arr.toSorted(() => Math.random() - 0.5);
}

const NUM_OF_COLUMS = 4;
const arrayOfNexMoves = [-1, 1, NUM_OF_COLUMS, NUM_OF_COLUMS * -1];

export const useGameBoardStore = create(
  combine(initialState, (set, get) => ({
    handleClick: (index: number) => {
      const cells = get().cells;
      if (verifyVictory(cells)) {
        alert('You Win');
        return;
      }
      if (cells[index] == null) return;
      const updateCell = (index: number, value: number | null) =>
        set(state => ({ cells: state.cells.with(index, value) }));
      const nextMove = arrayOfNexMoves.filter(nextIndexMove => {
        const nextIndex = index + nextIndexMove;
        return (
          cells[nextIndex] === null && nextIndex >= 0 && nextIndex <= ARRAY_LENGTH
        );
      });
      if (nextMove.length === 0) return;
      const value = cells[index];
      updateCell(index, null);
      updateCell(index + nextMove[0], value);
    },
    resetGame: () => {
      set(state => ({ cells: randomArray(state.cells) }));
    }
  }))
);
