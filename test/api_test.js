const assert = require('assert');
const urlSchema = require('../app/models/urlSchema');
describe("testing api into mongoDB", () => {
  it('save url into db', () => {
    const newUrl = new urlSchema({
      original_url: "www.google.com",
      short_url: "212313"
    });
    
    newUrl.save().then(() => {
      assert(newUrl.isNew === true);
      done();
    });

  });

});
