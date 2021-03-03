//const { assert } = require("console");
var AdvancedStorage = artifacts.require("AdvancedStorage");

contract('AdvancedStorage', (accounts) => {
    it('Farmer should call the Contract', async () => {
      const advancedStorage = await AdvancedStorage.deployed();
      await advancedStorage.add(10);
      const result = await advancedStorage.ids(0);
  
      assert(result.toNumber() === 10);
    });
  });
  