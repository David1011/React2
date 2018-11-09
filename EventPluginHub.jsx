putListener: function (inst, registrationName, listener) {


    var key = getDictionaryKey(inst);
    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});

    bankForRegistrationName[key] = listener;


    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.didPutListener) {
      PluginModule.didPutListener(inst, registrationName, listener);
    }
  },
    
var getDictionaryKey = function (inst) {
  return '.' + inst._rootNodeID;
};