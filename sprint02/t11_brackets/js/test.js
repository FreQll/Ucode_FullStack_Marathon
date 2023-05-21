describe('checkBrackets test', () => {
    it('1)()(())2(() = 2', () => {
        assert.equal(checkBrackets('1)()(())2(()'), 2);
    })
    it('Hello = -1', () => {
        assert.equal(checkBrackets('Hello'), -1);
    })
    it('() = 0', () => {
        assert.equal(checkBrackets('()'), 0);
    })
    it(')))))((((( = 10', () => {
        assert.equal(checkBrackets(')))))((((('), 10);
    })
    it('()157)) = 2', () => {
        assert.equal(checkBrackets('()157))'), 2);
    })
    it('xd = -1', () => {
        assert.equal(checkBrackets('xd'), -1);
    })
    it(')(|)))((|)) = 3', () => {
        assert.equal(checkBrackets(')(|)))((|))'), 3);
    })
    it('**(*** = 1', () => {
        assert.equal(checkBrackets('**(***'), 1);
    })
    it('k()))(())))(()d(() = 6', () => {
        assert.equal(checkBrackets('k()))(())))(()d(()'), 6);
    })
    it('()()()((()))() = 0', () => {
        assert.equal(checkBrackets('()()()((()))()'), 0);
    })

    it('type number', () => {
        assert.equal(checkBrackets(5), -1);
    })
    it('type NaN', () => {
        assert.equal(checkBrackets(NaN), -1);
    })
    it('type bool', () => {
        assert.equal(checkBrackets(true), -1);
    })
    it('type null', () => {
        assert.equal(checkBrackets(null), -1);
    })
    it('type undefined', () => {
        assert.equal(checkBrackets(undefined), -1);
    })
})