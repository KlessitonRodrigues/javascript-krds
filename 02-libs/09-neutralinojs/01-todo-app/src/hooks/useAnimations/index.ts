import { useRef } from 'react';

type AnimationConfig = {
  duration?: string;
  delay?: string;
  interation?: string;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fill?: 'none' | 'forwards' | 'backwards' | 'both';
};

const useAnimations = (animationList: string[]) => {
  const elRef = useRef<HTMLElement>();

  const play = (animationIndex: number, config?: AnimationConfig) => {
    if (!elRef.current) return;

    if (config?.delay) elRef.current.style.animationDelay = config.delay;
    if (config?.duration) elRef.current.style.animationIterationCount = config.duration;
    if (config?.interation) elRef.current.style.animationIterationCount = config.interation;
    if (config?.fill) elRef.current.style.animationFillMode = config.fill;
    if (config?.direction) elRef.current.style.animationDirection = config.direction;

    if (!elRef.current) return;
    elRef.current.classList.add(animationList[animationIndex]);
    console.log(elRef.current.classList);
    elRef.current.onanimationend = () => {
      elRef.current && elRef.current.classList.remove(animationList[animationIndex]);
    };
  };

  return {
    elRef,
    play,
  };
};

export default useAnimations;
