import { animateScroll } from "@/utils/animateScroll";

const logError = (): void =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

const getElementPosition = (element: HTMLElement): number => element.offsetTop;

interface ScrollToParams {
  id?: string;
  ref?: React.RefObject<HTMLElement>;
  duration?: number;
}


// @ts-ignore
export const scrollTo = ({ id, ref = null, duration = 3000 }: ScrollToParams): void => {
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  // decide what type of reference that is
  // if neither ref or id is provided set element to null
  const element = ref ? ref.current : id ? document.getElementById(id) : null;

  if (!element) {
    // log error if the reference passed is invalid
    logError();
    return;
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration
  });
};
