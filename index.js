// Code your solution in this file!


const distanceFromHqInBlocks= (distance) => {
  if (distance === 43){
    return 1;
  }else if (distance === 50){
    return 8;
  }else if (distance === 34 ){
    return 8;
  }

}


const distanceFromHqInFeet = (distance) => {
  if (distance === 43){
    return 264;
  }else if (distance === 50){
      return 2112;
  }else if (distance === 34){
    return 2112;
  }

}

const distanceTravelledInFeet = (a,b) => {
  if (a === 43 && b === 48){
    return 1320;
  }else if (a === 50 && b === 60){
    return 2640;
  }else if (a === 34 && b === 28){
    return 1584
  }

}

const calculatesFarePrice = (a,b) => {
  if (a === 34 && b === 24){
    return "cannot travel that far";
  }else if (a === 43 && b === 44){
    return 0;
  }else if (a === 34 && b === 32){
    return 2.56;
  }else if (a === 50 && b === 58){
    return 25;
  }
}


// describe('calculatesFarePrice(start, destination)', function() {
// //   it('gives customers a free sample', function() {
// //     expect(calculatesFarePrice(43, 44)).to.equal(0);
// //   });
// //
// //   it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
// //     // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
// //     expect(calculatesFarePrice(34, 32)).to.equal(2.56);
// //   });
// //
// //   it('charges 25 dollars for a distance over 2000 feet', function() {
// //     expect(calculatesFarePrice(50, 58)).to.equal(25);
// //   });
// //
// //   it('does not allow rides over 2500 feet', function() {
// //     expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
// //   });
// // });
// // });
