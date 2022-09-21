const hqBlockLocation = parseInt("42nd");

function distanceFromHqInBlocks(pickUpBlockLocation){
	return Math.abs(pickUpBlockLocation - hqBlockLocation);
}

function distanceFromHqInFeet(pickUpBlockLocation){
	return distanceFromHqInBlocks(pickUpBlockLocation) * 264;
}

function distanceTravelledInFeet(startingLocation, destinationLocation){
	return Math.abs(startingLocation - destinationLocation) * 264;
}

function calculatesFarePrice(startingLocation, destinationLocation){
	let distance = distanceTravelledInFeet(startingLocation, destinationLocation);
	if (distance < 400){
		return 0;
	} else if(distance >= 400, distance < 2000){
		return (distance - 400) * .02;
	} else if(distance >= 2000, distance < 2500){
		return 25;
	} else{
		return 'cannot travel that far'
	}
}