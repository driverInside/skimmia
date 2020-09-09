const fnOption = function (n:number) {
  for (let i = 1; i <= n; i++) {
    ifThen({
      ifArg: i % 3 === 0,
      thenFunction: function () {
        return ifThen({
          ifArg: i % 5 === 0,
          thenFunction: () => console.log('Musical'),
          elseFunction: () => console.log('Music')
        })
      },
      elseFunction: function () {
        return ifThen({
          ifArg: false,
          thenFunction: () => console.log('TI'),
          elseFunction: () => console.log(i)
        })        
      }
    })
  }
}

const ifThen = function (
{ ifArg, thenFunction, elseFunction }: { ifArg: boolean; thenFunction: Function; elseFunction: Function }) {
  if (ifArg) {
    thenFunction()
    return
  }
  elseFunction()
}

fnOption(100)
