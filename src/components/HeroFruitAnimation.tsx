import { useEffect, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import fruit1 from '../assets/1.png';
import fruit2 from '../assets/2.png';
import fruit3 from '../assets/3.png';
import fruit4 from '../assets/4.png';
import fruit5 from '../assets/5.png';
import fruit6 from '../assets/6.png';
import fruit7 from '../assets/7.png';
import fruit8 from '../assets/8.png';

type FruitConfig = {
  src: string;
  height: number;
  left: string;
  bottom: string;
  driftX: string;
  delay: string;
  rotate: string;
  spin: number;
};


function getRandomDeg(min: number, max: number) {
  return (Math.random() * (max - min) + min).toFixed(1) + 'deg';
}

// function getRandomSpin() {
  // Randomly choose +360 or -360 for spin direction
  // return Math.random() > 0.5 ? 360 : -360;
// }

const fruitConfigs: FruitConfig[] = [
  { src: fruit1, height: 600, left: '38%', bottom: '-550px', driftX: '24px', delay: '0s', rotate: getRandomDeg(-8, 8) },
  { src: fruit2, height: 680, left: '58%', bottom: '-560px', driftX: '10px', delay: '0s', rotate: getRandomDeg(-8, 8) },
  { src: fruit3, height: 150, left: '36%', bottom: '-520px', driftX: '20px', delay: '0s', rotate: getRandomDeg(-8, 8) },
  { src: fruit4, height: 200, left: '70%', bottom: '-300px', driftX: '-22px', delay: '0.3s', rotate: getRandomDeg(-8, 8) },
  { src: fruit5, height: 400, left: '56%', bottom: '-300px', driftX: '26px', delay: '1.5s', rotate: getRandomDeg(-8, 8) },
    { src: fruit6, height: 200, left: '20%', bottom: '-500px', driftX: '18px', delay: '0s', rotate: getRandomDeg(-8, 8) },
    { src: fruit7, height: 300, left: '16%', bottom: '-490px', driftX: '-16px', delay: '0.3s', rotate: getRandomDeg(-8, 8) },
  { src: fruit8, height: 520, left: '36%', bottom: '-460px', driftX: '-12px', delay: '1.5s', rotate: getRandomDeg(-8, 8) }
].map((fruit, i) => ({
  ...fruit,
  spin: (i % 2 === 0 ? -180 : 180)
}));

export function HeroFruitAnimation() {
  const [heroElement, setHeroElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setHeroElement(document.getElementById('hero'));
  }, []);

  if (!heroElement) {
    return null;
  }

  return createPortal(
    <div className="hero-fruits-layer" aria-hidden="true">
      {fruitConfigs.map((fruitConfig, index) => {
        const isFirstFruit = index === 0;
        const isLastFruit = index === fruitConfigs.length - 1;

        const style = {
          height: `${fruitConfig.height}px`,
          left: fruitConfig.left,
          bottom: fruitConfig.bottom,
          animationDelay: fruitConfig.delay,
          '--drift-x': fruitConfig.driftX,
          '--base-rotate': fruitConfig.rotate,
          '--spin-dir': fruitConfig.spin + 'deg',
          ...(isFirstFruit ? { animationDuration: '3.5s' } : {}),
          ...(index === 1 ? { animationDuration: '4.5s' } : {})
        } as CSSProperties;

        return (
          <img
            key={`hero-fruit-${index}`}
            src={fruitConfig.src}
            alt=""
            className={`hero-fruit-item${isFirstFruit ? ' hero-fruit-item--first' : ''}${isLastFruit ? ' hero-fruit-item--last' : ''}`}
            style={style}
            loading="eager"
          />
        );
      })}
    </div>,
    heroElement
  );
}
