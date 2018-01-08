describe('Main', () => {
    //roda um vez, antes do bloco
    before(() => {
        console.log('before')
    })
    ////roda um vez, depois do bloco
    after(() => {
        console.log('after')
    })

    ////roda todas as vezes, antes de cada bloco
    beforeEach(() => {
        console.log('beforeEach')
    })

    ////roda todas as vezes, depois de cada bloco
    afterEach(() => {
        console.log('afterEach')
    })

    it('Teste 1',() => {

    })

     it('Teste 2',() => {

    })
})