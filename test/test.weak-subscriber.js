var expect = require('expect.js');

describe('WeakSubscriber', function(){

  describe('Publishing events', function() {

    it('Events can be published', function() {
      var WeakSubscriber = require('../src/weak-subscriber');
      WeakSubscriber.trigger('event-test', {});
    });

  });

  describe('Listening to events', function() {

    it('Subscriber functionality', function(done) {
      var WeakSubscriber = require('../src/weak-subscriber');

      WeakSubscriber.on('event-test')
        .then(function(data) {
          done();
        });

      WeakSubscriber.trigger('event-test', {});
    });

  });

});
