// utils/scrollWithOffset.ts
export const scrollWithOffset = (el: HTMLElement): void => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60; // Adjust based on your fixed navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};