function fullName(firstName, lastName, middleInitial) {

  if (middleInitial === undefined && lastName === undefined) {
    return firstName
  }

  else if (middleInitial === undefined) {
    return firstName + '  ' + lastName;
  }

  else {
    return firstName + '  ' + middleInitial + '  ' + lastName;

  }
}

function returnSmaller(first, second) {

}



function tankDeterminer(animal, size) {
}
