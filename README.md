# @coxy/replay-count-loop

A simple utility to retry a function multiple times until it succeeds or reaches the maximum number of attempts.

## Installation

```bash
npm install @coxy/replay-count-loop
```
or
```bash
yarn add @coxy/replay-count-loop
```

## Usage

### Register a function

```javascript
const random = () => {
  if (Math.random() > 0.01) {
    throw new Error(':(');
  }
  return 'Success!';
}
```

### Add to loop

```javascript
import replayCountLoop from '@coxy/replay-count-loop';

const loop = replayCountLoop(random, {
  onError: e => console.log('error', e.message),
  attempts: 20,
  delay: 100,
});

loop.then(console.log);
loop.catch(console.error);
```

## Options
- `attempts` (number): Maximum number of retry attempts (default: 10)
- `delay` (number): Delay in milliseconds between attempts (default: 0)
- `onError` (function): Optional callback executed after each failed attempt

## Features
- Lightweight and minimalistic.
- Supports customizable retry logic.
- Promise-based API.

---

> Fun fact: The concept of retrying operations is heavily used in network programming, where transient failures are common!

