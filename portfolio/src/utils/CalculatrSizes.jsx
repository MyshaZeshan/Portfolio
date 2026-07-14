export const calculateSizes = (isXSmall, isSmall, isMobile, isTablet) => {
  return {
    targetScale: isXSmall
      ? 0.8
      : isSmall
      ? 1.0
      : isMobile
      ? 2.2
      : isTablet
      ? 3
      : 3.1,

    targetPosition: isXSmall
      ? [0, -2.5, 0]
      : isSmall
      ? [0, -3.5, 0]
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
    targetPositions: isXSmall
      ? [0, 0, 0]
      :isSmall
      ? [0, -3.5, 0]
      : isMobile
      ? [0.6, 0.2, 0]
      : isTablet
      ? [1, 0.5, 1]
      : [0.6, 0.2, 0],
    targetScales: isXSmall
      ? 1
      :isSmall
      ? 1
      : isMobile
      ? 1.1
      : isTablet
      ? 0.9
      : 1.2,
  };
};
export default calculateSizes;