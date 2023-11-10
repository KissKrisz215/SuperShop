const size = {
  xxs: "768px",
  xs: "972px",
  sm: "1020px",
  lg: "1200px",
};

const device = {
  xxs: `(min-width: ${size.xxs})`,
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

export default { size, device };
