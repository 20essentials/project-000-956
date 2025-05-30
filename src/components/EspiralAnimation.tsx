import '@/styles/EspiralAnimation.css';

export const EspiralAnimation = ({ style }: any) => {
  return (
    <section className='container-espiral' style={{...style}}>
      {Array.from({ length: 10 }, (_, n) => {
        return (
          <aside className='loader' style={{ ['--r' as any]: n + 1 }}>
            {Array.from({ length: 20 }, (_, i) => {
              return (
                <span
                  className='circulo'
                  style={{ ['--i']: i + 1 } as React.CSSProperties}
                ></span>
              );
            })}
          </aside>
        );
      })}
    </section>
  );
};
