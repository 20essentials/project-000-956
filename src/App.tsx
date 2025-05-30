import { Background } from '@/components/Background.tsx';
import { GameBoard } from '@/components/GameBoard';
import { ResetButton } from '@/components/ResetButton';
import { EspiralAnimation } from '@/components/EspiralAnimation';

export const App = () => {
  return (
    <>
      <Background />
      <GameBoard />
      <ResetButton />
      <EspiralAnimation style={{ top: '0', left: '0' }} />
      <EspiralAnimation style={{ top: 'unset', left: 'unset', bottom: '0', right: '0' }} />
    </>
  );
};
