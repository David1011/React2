  trapBubbledEvent: function (topLevelType, handlerBaseName, element) {
    if (!element) {
      return null;
    }
    return EventListener.listen(
      element,   
      handlerBaseName,   
      ReactEventListener.dispatchEvent.bind(null, topLevelType));  
  },
    
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {

      target.addEventListener(eventType, callback, false);
      return {

        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {

      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },