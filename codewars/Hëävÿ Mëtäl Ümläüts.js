const heavyMetalUmlauts = s => s.replace(/[aeiouy]/gi, c => M[c]);

const M = {
  A: 'Ä', a: 'ä',
  E: 'Ë', e: 'ë',
  I: 'Ï', i: 'ï',
  O: 'Ö', o: 'ö',
  U: 'Ü', u: 'ü',
  Y: 'Ÿ', y: 'ÿ'
};