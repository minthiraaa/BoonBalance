const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const rows = require('../data/places.json');
function checkData() {
  const ids = new Set();
  for (const r of rows) {
    assert(!ids.has(r.id), 'Duplicate place: ' + r.id); ids.add(r.id);
    for (const key of ['id','code','name','description','location','opening','howToPray','items']) assert(r[key], 'Missing ' + key);
    assert(['Love','Work','Health','Lucky'].includes(r.code));
    assert(fs.existsSync(path.join(root, 'assets/places', r.imageFile)), 'Missing photo ' + r.imageFile);
    assert(r.rate >= 0 && r.rate <= 5);
  }
  for (const code of ['Love','Work','Health','Lucky']) assert(rows.filter(r => r.code === code).length >= 2);
  for (const folder of ['screens', 'data']) {
    for (const f of fs.readdirSync(path.join(root, folder))) {
      if (!f.endsWith('.js')) continue;
      const text = fs.readFileSync(path.join(root, folder, f), 'utf8');
      assert(!/strapi\.widelyapps|Bearer |STRAPI_TOKEN/.test(text), 'Legacy API credential/reference remains: ' + f);
    }
  }
  return rows;
}
module.exports = { checkData };
if (require.main === module) { checkData(); console.log('OK: 8 local places, 4 categories, bundled photos, no old API dependency.'); }
