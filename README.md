# weak-subscriber

A publisher subscriber system using Weakmaps and Promises.

## Usage

### Listening to events

### Publishing events

```javascript
var WeakSubscriber = require('weak-subscriber');
WeakSubscriber.trigger('event-name', data);
```


```javascript
var WeakSubscriber = require('weak-subscriber');
WeakSubscriber
    .on('event-name')
    .then(function(data) {
      // We have the data
    });
```

## Tests
