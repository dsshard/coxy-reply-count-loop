"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replayCountLoop(fn, options = {}) {
    if (!fn)
        throw new Error('first parameter (fn) is required');
    let attempt = 0;
    async function replay() {
        try {
            return await fn({ attempt });
        }
        catch (err) {
            attempt += 1;
            if (options.attempts > 0 && attempt > options.attempts)
                throw new Error(err);
            if (typeof options.onError === 'function')
                options.onError(err);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(replay());
                }, options.delay || 0);
            });
        }
    }
    return replay();
}
exports.default = replayCountLoop;
