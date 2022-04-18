import React from "react";

function useArrow({ arrowSide, arrowRef }: any) {
  const listRef = React.useRef({} as any);
  return arrowSide === "left"
    ? (listRef.current.scrollLeft -= 1200)
    : (listRef.current.scrollLeft += 1200);
//   const handleScrollRight = () => {
//     listRef.current.scrollLeft += 1200;
//   };
//   const handleScrollLeft = () => {
//     listRef.current.scrollLeft -= 1200;
//   };
}

export default useArrow;
