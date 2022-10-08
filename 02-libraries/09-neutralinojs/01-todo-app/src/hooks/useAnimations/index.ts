import { CSSProperties, useRef } from 'react';

type AnimationConfig = {
  animationIndex?: number;
  duration?: string;
  delay?: string;
  interation?: string;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fill?: 'none' | 'forwards' | 'backwards' | 'both';
  playState?: 'paused' | 'running';
  afterAnimation?: (el: HTMLElement) => void;
  afterAnimationStyles?: CSSProperties;
};

const useAnimations = (animationList: string[]) => {
  const elRef = useRef<HTMLElement>();

  const play = (config?: AnimationConfig) => {
    if (!elRef.current) return;

    if (config?.delay) elRef.current.style.animationDelay = config.delay;
    if (config?.interation) elRef.current.style.animationIterationCount = config.interation;
    if (config?.fill) elRef.current.style.animationFillMode = config.fill;
    if (config?.direction) elRef.current.style.animationDirection = config.direction;
    if (config?.duration) elRef.current.style.animationDuration = config.duration;
    if (config?.playState) elRef.current.style.animationPlayState = config.playState;

    elRef.current?.classList?.add(animationList[config.animationIndex || 0]);
    elRef.current.onanimationend = () => {
      if (!elRef.current) return;
      elRef.current?.classList?.remove(animationList[config.animationIndex || 0]);

      config.afterAnimation && config.afterAnimation(elRef.current);

      Object.entries(config.afterAnimationStyles).forEach(([key, value]: string[]) => {
        // @ts-ignore
        elRef.current.style[key] = value;
      });
    };
  };

  return {
    elRef,
    play,
  };
};

export default useAnimations;
