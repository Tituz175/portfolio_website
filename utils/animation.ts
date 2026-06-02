const ease = [0.16, 1, 0.3, 1] as const;

export function heroAnim(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  };
}
