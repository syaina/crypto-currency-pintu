export const thousandSeparator = (num: string) => {
  let integer = num.split('.')[0];
  const decimal = num.split('.')[1];

  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return decimal ? `${integer},${decimal}` : integer;
};
