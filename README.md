

Register function

``` javascript
const random = () => {
  if (Math.random() > 0.01) {
    throw new Error(':(');
  }
  return 'Success!';
}
```

Add to loop

``` javascript
import replayCountLoop from '@coxy/reply-count-loop';

const loop = replayCountLoop(random, {
  onError: e => console.log('error', e.message),
  attempts: 20,
  delay: 100,
})

loop.then(console.log);
loop.catch(console.error);
```
