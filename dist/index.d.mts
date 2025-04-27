interface ReplayCountLoopOptions {
    attempts?: number;
    onError?: (err: any) => void;
    delay?: number;
}
declare function replayCountLoop<T>(fn: any, options?: ReplayCountLoopOptions): Promise<T>;

export { type ReplayCountLoopOptions, replayCountLoop as default };
