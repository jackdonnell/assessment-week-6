const {shuffleArray, array, arrCopy} = require('./utils')


describe('shuffleArray should', () => {
    test('should be type string', () => {
        expect(shuffleArray()).toEqual("array")
        // expect(typeof shuffleArray.arrCopy).toBe('array')
    })
    test('array of same length', () => {
        expect (arrCopy.length).toEqual(array.length)
    })
})
