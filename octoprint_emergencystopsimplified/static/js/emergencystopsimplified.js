$(function() {
    function emergencystopsimplifiedtwoViewModel(parameters) {
        var self = this;
        self.settingsViewModel = parameters[0];

        self.onDataUpdaterPluginMessage = function(plugin, data) {
            if (plugin !== "emergencystopsimplifiedtwo") {
                console.log('Ignoring '+plugin);
                return;
            }

            new PNotify({
                title: 'Emergency stop simplifiedtwo',
                text: data.msg,
                type: data.type,
                hide: data.autoClose
            });

        }

    }

    // This is how our plugin registers itself with the application, by adding some configuration
    // information to the global variable OCTOPRINT_VIEWMODELS
    ADDITIONAL_VIEWMODELS.push([
        // This is the constructor to call for instantiating the plugin
        emergencystopsimplifiedtwoViewModel,

        // This is a list of dependencies to inject into the plugin, the order which you request
        // here is the order in which the dependencies will be injected into your view model upon
        // instantiation via the parameters argument
        ["settingsViewModel"],

        // Finally, this is the list of selectors for all elements we want this view model to be bound to.
        ["#settings_plugin_emergencystopsimplifiedtwo_form"]
    ]);
});
