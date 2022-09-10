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

  const play = (animationIndex: number, config?: AnimationConfig, afterAnimation?: () => any) => {
    if (!elRef.current) return;

    if (config?.delay) elRef.current.style.animationDelay = config.delay;
    if (config?.interation) elRef.current.style.animationIterationCount = config.interation;
    if (config?.fill) elRef.current.style.animationFillMode = config.fill;
    if (config?.direction) elRef.current.style.animationDirection = config.direction;
    if (config?.duration) elRef.current.style.animationDuration = config.duration;

    elRef.current.classList.add(animationList[animationIndex]);
    elRef.current.onanimationend = () => {
      if (!elRef.current) return;
      elRef.current && elRef.current.classList.remove(animationList[animationIndex]);
      afterAnimation && afterAnimation();
    };
  };

  return {
    elRef,
    play,
  };
};

export default useAnimations;
