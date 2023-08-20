const handle = (x : number) => {
  let a = x + 9
  return a*3 // ! return x * 3
}

const handle2 = (value: number) => {
  if (value >= 100) return value
  else return value * 2;
}