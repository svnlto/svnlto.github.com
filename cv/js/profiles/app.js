dependencies = {
  stripConsole : 'all',
  action : 'clean, release',
  optimize : 'shrinksafe',
  releaseName : 'js',
  localeList : 'en-gb',

  layers: [
    {
      name: "../app/base.js",
      resourceName : "app.base",
      dependencies: [
        "app.base"
      ]
    }
  ],

  prefixes: [
    [ "dijit", "../dijit" ],
    [ "dojox", "../dojox" ],
    [ "app", "../../app" ]
  ]
};
