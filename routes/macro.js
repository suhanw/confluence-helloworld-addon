module.exports = function (app, addon) {

    // Render the macro by returning html generated from the hello-world template.
    // The hello-world template is defined in /views/hello-world.hbs.
    app.get('/macro', addon.authenticate(), function (req, res) {
            res.render('hello-world', {
                title: 'Atlassian Connect'
            });
        }
    );

};
