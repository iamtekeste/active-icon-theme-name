import m from './'
import test from 'ava';
test('async test', async t => {
    const name = await m()
    t.is(typeof name, 'string')
});
