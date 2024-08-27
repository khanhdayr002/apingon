const router = require("express").Router();
const { getLink1 } = require("../controllers/getLink1");
const { getLink2 } = require("../controllers/getLink2");
const { ad } = require("../controllers/ad");
const { adv2 } = require("../controllers/adv2");
const { cadao } = require("../controllers/cadao");
const { canhgame } =
require("../controllers/canhgame");
const { capcut } =
require("../controllers/capcut");
const { sound } = require("../controllers/sound");
const { soundv2 } = require("../controllers/soundv2");
const { girl } = require("../controllers/girl");
const { girlduyetbox } =
require("../controllers/girlduyetbox");
const { girlv2 } = require("../controllers/girlv2");
const { science } = require("../controllers/science");
const { vdanime } = require("../controllers/vdanime");
const { phongcanh } = require("../controllers/phongcanh");
const { phongcanhbox } =
require("../controllers/phongcanhbox");
const { phongcanhv2 } = require("../controllers/phongcanhv2")
;
const { putin } =
require("../controllers/putin");
const { randomvid } =
require("../controllers/randomvid")
const { danhngon } = require("../controllers/danhngon");
const { denvau } =
require("../controllers/denvau");
const { donld } =
require("../controllers/donld");
const { ngontinh } = require("../controllers/ngontinh");
const { nyvanh } =
require("../controllers/nyvanh");
const { vdanime2 } = require("../controllers/vdanime2");
const { vdcosplay } =
require("../controllers/vdcosplay");
const { vdcosplayv2 } =
require("../controllers/vdcosplayv2");
const { vidhaihuoc } =
require("../controllers/vidhaihuoc");
const { vidthamgia } =
require("../controllers/videogai");
const { tamtrang } =  require("../controllers/tamtrang");
const { tamtrangv2 } = require("../controllers/tamtrangv2");
const { chill } = require("../controllers/chill");
const { chillvn } =
router.get {"/videogai", vdgai);
router.get("/anime", anime);
router.get("/animeanhve", animeanhve);
router.get("/animemotmat", animemotmat);
router.get("/animethuong", animethuong);
router.get("/animev2", animev2);
router.get("/cosplay", cosplay);
router.get("/cosplayv2", cosplayv2);
router.get("/cover", cover);
router.get("/phongcanh", phongcanh);
router.get("/phongcanhbox", phongcanhbox);
router.get("/phongcanhv2", phongcanhv2);
router.get("/putin", putin);
router.get("/randomvid", randomvid);
router.get("/cauhoi", cauhoi);
router.get("/cauhoiv2", cauhoiv2);
router.get("/sleep", sleep);
router.get("/sontung", sontung);
router.get("/hi", hi);
router.get("jack", jack);
router.get("joe", joe);

module.exports = router;
