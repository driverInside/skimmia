const orOption = require('../src/or')

describe('Or Option Testing', () => {
  const log = console.log
  beforeEach(() => {
    console.log = jest.fn()
  })
  afterAll(() => {
    console.log = log
  })
  it('should the function to be defined', () => {
    expect(orOption).toBeDefined()
  })

  it('should use console.log to print', () => {
    orOption(1)
    expect(console.log).toBeCalled()
  })

  it('should call the function three times', () => {
    orOption(3)
    expect(console.log.mock.calls.length).toBe(3)
  })

  it('should print "Music" instead the number 3', () => {
    orOption(3)
    expect(console.log.mock.calls[0][0]).toEqual(1)
    expect(console.log.mock.calls[1][0]).toEqual(2)
    expect(console.log.mock.calls[2][0]).toEqual('Music')
  })

  it('should print "TI" instead the number 5', () => {
    orOption(5)
    expect(console.log.mock.calls[4][0]).toEqual('TI')
  })

  it('should print "Musical" instead the number 15', () => {
    orOption(15)
    expect(console.log.mock.calls[14][0]).toEqual('Musical')
  })

  it('should call the function 100 times', () => {
    orOption(100)
    expect(console.log.mock.calls.length).toBe(100)
  })

  it('should print "Music" instead of number 3 factors', () => {
    orOption(100)
    for (let i = 2; i < 100; i += 3) {
      // avoid 15 factors
      if (!(i % 15)) {
        expect(console.log.mock.calls[i][0]).toEqual('Music')
      }
    }
  })

  it('should print "TI" instead of number 5 factors', () => {
    orOption(100)
    for (let i = 4; i < 100; i += 5) {
      // avoid 15 factors
      if (!(i % 15)) {
        expect(console.log.mock.calls[i][0]).toEqual('TI')
      }
    }
  })

  it('should print "Musical" instead of number 15 factors', () => {
    orOption(100)
    for (let i = 14; i < 100; i += 15) {
      expect(console.log.mock.calls[i][0]).toEqual('Musical')
    }
  })
})
