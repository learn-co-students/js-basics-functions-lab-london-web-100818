function distanceFromHqInBlocks(blocknumber) {
return Math.abs(blocknumber-42);
}
function distanceFromHqInFeet(blocknumber) {
return distanceFromHqInBlocks(blocknumber)*264;
}
function distanceTravelledInFeet(block1,block2){
  return Math.abs(block1-block2)*264
}
function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
