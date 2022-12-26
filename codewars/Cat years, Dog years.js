var humanYearsCatYearsDogYears = function(humanYears) {
  let y1cat = 15;
  let y2cat = (y1cat + 9);
  let y3plusCatYears = 4;
  
  let y1dog = 15;
  let y2dog = (y1dog + 9);
  let y3plusDogYears = 5;
  
  if (humanYears <= 2) {
    if (humanYears == 1) {
      return [1, y1cat, y1dog];
      } else if (humanYears == 2) {
        return [2, y2cat, y2dog];
      } else if (humanYears == 0) {
        return [0,0,0];
      }
    } else {
      let twilightYears = humanYears - 2
      let catYears = y2cat + (twilightYears*y3plusCatYears)
      let dogYears = y2dog + (twilightYears*y3plusDogYears)
      return [humanYears, catYears, dogYears];
    }
  }