// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let distance
    if (someValue >= 42) {
        distance = (someValue - 42)
    } else {
        distance = (someValue - 42) * -1
    }
    return distance
}

function distanceFromHqInFeet(someValue) {
    let distance = (distanceFromHqInBlocks(someValue)) * 264;

    return distance
}

function distanceTravelledInFeet(startBlock, endBlock) {  
    let distance
    if (startBlock < endBlock) {
        distance = ((endBlock - startBlock) * 264)
    } else if (endBlock < startBlock) {
        distance = ((startBlock - endBlock) * 264)
    }

    return distance
}

function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    let fare
    if (distance <= 400) {
        fare = 0  
    } else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25 
    } else {
        fare = 'cannot travel that far'
    }
    return fare
}

