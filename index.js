

function distanceFromHqInBlocks(pickup) {
  
    return pickup > 42 ? (pickup - 42) : (42 - pickup)

}

function distanceFromHqInFeet(pickup) {

    return distanceFromHqInBlocks(pickup) * 264

}

function distanceTravelledInFeet(start, end) {
    return (end > start) ?  (end - start) * 264 : (start - end) * 264
}



function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end)

    if (distance < 400) {
        return 0
    }
    else if (distance >= 400 && distance  <= 2000) {
        return (distance - 400)* .02
    }
           
    else if (distance > 2000 && distance <= 2500) {
        return 25
    }
           
       else {
           return 'cannot travel that far'
       }
    

}