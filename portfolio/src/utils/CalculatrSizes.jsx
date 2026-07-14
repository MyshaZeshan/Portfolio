export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    targetScale: isSmall
      ? 1.0
      : isMobile
      ? 2.2
      : isTablet
      ? 3
      : 3.1,

    targetPosition: isSmall
      ? [0, -2.8, 0]
      : isMobile
      ? [0, -9, 0]
      : isTablet
      ? [4.5, -9, 0]
      : [0, 0, 0],
    rotation:isMobile
      ? [0, 0, 0]
      : isTablet
      ? [0, -Math.PI / 12, 0]
      : [0, -0.2, 0],
    targetPositions: isSmall
      ? [0, -3.5, 0]
      : isMobile
      ? [0.6, 0.2, 0]
      : isTablet
      ? [1, 0.5, 1]
      : [0.6, 0.2, 0],
    targetScales: isSmall
      ? 1
      : isMobile
      ? 1.1
      : isTablet
      ? 0.9
      : 1.2,
  };
};
export default calculateSizes;