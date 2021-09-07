const router = require('express').Router();
const controller = require('../controllers/whatsapp');

router.get('/connect',async (req, res) =>{
    const result = await controller.getClient()
    if(result) controller.start(result)
    res.status(200)
    res.send("Connected")
});
router.get('/logout',async (req, res) =>{
    const result = await controller.logOut()
    console.dir(result)
    res.status(200)
    res.send("loggedOut")
});

module.exports = router;
