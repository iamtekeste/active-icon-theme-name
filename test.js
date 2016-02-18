import iconThemeName from './index.js'
import test from 'ava';
test(t => {
    return iconThemeName().then(result => {
        t.is(typeof result, 'string')
        t.true(result.length > 1)
    });
});
