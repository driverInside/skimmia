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
    
  })

  it('should replace 5 factors by "TI"', () => {
    
  })

  it('should replace 15 factors by "Musical"', () => {
    
  })
})
