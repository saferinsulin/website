const glucoseValues = [];

for (let i = 31; i < 501; i++) {
  const t = (i/10).toFixed(1).toString();
  const v = i/10;
  glucoseValues.push({ text: t, value: v });
}

const insulinRates = [];
for (let i = 0; i < 151; i++) {
  const t = (i/10).toFixed(1).toString();
  const v = i/10;
  insulinRates.push({ text: t, value: v });
}

export { glucoseValues, insulinRates };
