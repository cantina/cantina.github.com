YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "app",
        "app.views",
        "cantina",
        "cantina.cli",
        "cantina.plugins.controllers",
        "cantina.plugins.http",
        "cantina.plugins.middleware",
        "cantina.plugins.utils",
        "views",
        "views.plugin",
        "views.plugin.helpers",
        "views.plugin.partials",
        "views.plugin.registry"
    ],
    "modules": [
        "cantina",
        "views"
    ],
    "allModules": [
        {
            "displayName": "cantina",
            "name": "cantina",
            "description": "Cantina Application Framework\n-----------------------------\n\nA framework for building interconnected applications and services.\n\nA cantina app/service is primarily a flatiron http application.  Cantina\nextends flatiron to (optionally) use amino as well as providing useful\nplugins and code structuring conventions."
        },
        {
            "displayName": "views",
            "name": "views",
            "description": "Cantina Views - Helpers Plugin\n--------------------------------\n\nExposes an api for adding dynamic helpers for binding template data."
        }
    ]
} };
});