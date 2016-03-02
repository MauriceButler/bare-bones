var SeaLion = require('sea-lion'),
    router = new SeaLion();

router.add(require('./task'));

router.add({
    '/heartbeat': {
        GET: function(request, response){
            response.end('OK');
        }
    }
});

module.exports = router;