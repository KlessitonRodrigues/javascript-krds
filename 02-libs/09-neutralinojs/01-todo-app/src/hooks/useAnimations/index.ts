import { useRef } from 'react';

export const useAnimations = (animationList: string[]) => {
  const elRef = useRef<HTMLDivElement>();

  const cleanAnimations = () => {
    elRef.current.onanimationend = () => {
      animationList.forEach((animationClass) => {
        elRef.current.className = elRef.current.className.replace(
          animationClass,
          ''
        );
      });
    };
  };

  const play = (animationIndex: number) => {
    elRef.current.classList.add(animationList[animationIndex]);
    console.log(elRef.current.className);

    elRef.current.classList.remove(animationList[animationIndex]);
    console.log(elRef.current.className);

    //cleanAnimations();
  };

  return {
    elRef,
    play,
  };
};