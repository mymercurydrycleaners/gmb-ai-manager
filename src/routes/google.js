const express = require("express");

const router = express.Router();

const { getBusinessInfo } = require("../google/business");
const { getGoogleStatus } = require("../google/oauth");
const { getAccounts } = require("../google/accounts");
const { getLocations } = require("../google/locations");

router.get("/status", (req, res) => {
res.json({
success: true,
google: getGoogleStatus()
});
});

router.get("/business", async (req, res) => {
try {
const result = await getBusinessInfo();
res.json(result);
} catch (err) {
res.status(500).json({
success: false,
error: err.message
});
}
});

router.get("/accounts", async (req, res) => {
try {
const data = await getAccounts();

```
res.json({
  success: true,
  data
});
```

} catch (err) {
res.status(500).json({
success: false,
error: err.message,
details: err.response?.data || null
});
}
});

router.get("/locations", async (req, res) => {
try {
const data = await getLocations();
res.json(data);
} catch (err) {
res.status(500).json({
success: false,
error: err.message
});
}
});

module.exports = router;
