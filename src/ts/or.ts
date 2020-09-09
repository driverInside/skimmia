interface MapIndex {
  3: string,
  5: string,
  15: string
}

const orOption = function (n:number): void {
  const map: MapIndex= {
    3: 'Music',
    5: 'TI',
    15: 'Musical'
  } 
  for (let i = 1; i < n; i++) {
    const music = (i % 3) * - 1 + 3
    const ti = (i % 5) + 5
    const musical = music * ti
    console.log(
      map[musical] || map[music] || map[ti] || i
    )
  }
}

orOption(100)
