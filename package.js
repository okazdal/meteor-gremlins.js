Package.describe({
    summary: "Unleash a bunch of monkeys on your app."
});

Package.on_use(function (api) {
    api.add_files('gremlins.min.js', 'client');
});