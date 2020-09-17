/**********************************
 * YOUR CODE GOES HERE THIS TIME! *
 **********************************/




 

/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof x === 'undefined') {
  x = undefined;
}

if (typeof y === 'undefined') {
  y = undefined;
}

if (typeof z === 'undefined') {
  z = undefined;
}

if (typeof greeting === 'undefined') {
  greeting = undefined;
}

if (typeof firstName === 'undefined') {
  firstName = undefined;
}

if (typeof callStatus === 'undefined') {
  callStatus = undefined;
}

if (typeof double === 'undefined') {
  double = undefined;
}

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof square === 'undefined') {
  square = undefined;
}

if (typeof beNice === 'undefined') {
  beNice = undefined;
}

if (typeof changeName === 'undefined') {
  changeName = undefined;
}

if (typeof hangUp === 'undefined') {
  hangUp = undefined;
}


describe('double', () => {
  it(`doubles x`, () => {
    double();
    expect(x).toEqual(6);
  })
});

describe('triple', () => {
  it(`triples y`, () => {
    triple();
    expect(y).toEqual(30);
  })
});

describe('square', () => {
  it(`squares the variable z`, () => {
    square();
    expect(z).toBe(16);
  })
});

describe('beNice', () => {
  it(`says hello to the person with the first name in firstName`, () => {
    beNice();
    expect(greeting.includes('hello') && greeting.includes(firstName)).toBe(true);
  })
});

describe('changeName', () => {
  it(`changes the value of firstName to 'Danger'`, () => {
    changeName();
    expect(firstName).toBe('Danger')
  })
});
  
describe('hangUp', () => {
  it(`changes the value of callStatus to be 'call ended'`, () => {
    hangUp();
    expect(callStatus).toBe('call ended')
  })
});
