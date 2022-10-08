export interface ReplayCountLoopOptions {
    attempts?: number;
    onError?: (err: any) => void;
    delay?: number;
}
export default function replayCountLoop<T>(fn: any, options?: ReplayCountLoopOptions): Promise<T>;
