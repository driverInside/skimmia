const { fnOption, ifThen } = require('../src/fn')

describe('Function option', () => {
  const log = console.log
  beforeEach(() => {
    console.log = jest.fn()
  })
  afterAll(() => {
    console.log = log
  })
  it('should the functions to be defined', () => {
    expect(fnOption).toBeDefined()
    expect(ifThen).toBeDefined()
  })

  it('should ifThen function call second argument fn', () => {
    ifThen(1, (it = 'if/then') => console.log(it), null)

    expect(console.log).toBeCalled()
    expect(console.log.mock.calls[0][0]).toEqual('if/then')
  })

  it('should ifThen function call the third argument fn', () => {
    ifThen(0, null, (e = 'else') => console.log(e))

    expect(console.log).toBeCalled()
    expect(console.log.mock.calls[0][0]).toEqual('else')
  })

  it('should replace 3 factors by "Music"', () => {
    fnOption(100)
    for (let i = 2; i < 100; i += 3) {
      // avoid 15 factors
      if (!(i % 15)) {
        expect(console.log.mock.calls[i][0]).toEqual('Music')
      }
    }
  })

  it('should replace 5 factors by "TI"', () => {
    fnOption(100)
    for (let i = 4; i < 100; i += 5) {
      // avoid 15 factors
      if (!(i % 15)) {
        expect(console.log.mock.calls[i][0]).toEqual('TI')
      }
    }
  })

  it('should replace 15 factors by "Musical"', () => {
    fnOption(100)
    for (let i = 14; i < 100; i += 15) {
      expect(console.log.mock.calls[i][0]).toEqual('Musical')
    }
  })
})
