import { useEffect, useMemo, useState } from "react";
import Arrow, { DIRECTION } from "react-arrows";

interface Props {
  xpath1: string;
  xpath2: string;
}

const arrowConfig = ({ xpath1, xpath2 }: Props) => {
  const getElementFromXPath = (path: string) => {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
      .singleNodeValue;
  };
  const el1 = getElementFromXPath(xpath1) as HTMLElement;
  const el2 = getElementFromXPath(xpath2) as HTMLElement;

  const getArrowDirection = () => {
    const el1Pos = el1.getBoundingClientRect();
    const el2Pos = el2.getBoundingClientRect();
    const x = el2Pos.x - el1Pos.x;
    const y = el2Pos.y - el1Pos.y;

    if (Math.abs(x) > Math.abs(y)) {
      if (x >= 0) return { direction: DIRECTION.BOTTOM, translation: [0, 1] };
      return { direction: DIRECTION.TOP, translation: [0, -1] };
    } else {
      if (y >= 0) return { direction: DIRECTION.LEFT, translation: [-1, 0] };
      return { direction: DIRECTION.RIGHT, translation: [1, 0] };
    }
  };
  const arrowDirections = getArrowDirection();

  return {
    from: {
      node: el1,
      ...arrowDirections,
    },
    to: {
      node: el2,
      ...arrowDirections,
    },
  };
};

const FloatArrow = (props: Props) => {
  const [config, setConfig] = useState<any>({});

  useEffect(() => {
    setConfig(arrowConfig(props));
  }, [props.xpath1, props.xpath2]);

  return <Arrow className="arrow" from={config?.from} to={config?.to} />;
};

export default FloatArrow;
