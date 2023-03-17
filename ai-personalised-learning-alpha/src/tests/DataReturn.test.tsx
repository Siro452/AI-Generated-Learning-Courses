import { expect, test, describe, it } from 'vitest'
import payload from '../components/generatebar'

describe('payload', () => {
    it('returns data', () => {
        expect(payload).eq({fileName: "", payload: ""})
    })
})