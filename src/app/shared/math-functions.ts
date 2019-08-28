export function round(number, precision) {
  const factor = Math.pow(10, precision);
  const tempNumber = number * factor;
  const roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
};

export function cotizacionFormatter(params) {
  if (typeof params === 'undefined') {
    return NaN;
  } else {
    return params.value.toFixed(6).replace(/(\d)(?=(\d{7})+(?!\d))/g, '$1,');
  }
}
