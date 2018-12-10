export const name = 'roger';

export const a = 'v2.0';


function nest(fn, currentArgs = [], allArgs = []) {
    let newArgs = [...allArgs, ...currentArgs];
    if (newArgs.length === fn.length) {
        return fn(...newArgs);
    } else {
        return (...args) => {
            nest(args, newArgs, fn)
        }
    }
}

function curry(fn) {
    if (fn.length === 0) {
        return fn;
    }
    retrun(
        (...arg) => nest(arg)
    )
}
