const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("MultipleNFT", function () {
    const VNDGAME = 0;

    let shop;
    let player1;
    let player2;
    let player3;
    let gameEco;

    beforeEach(async function() {
        [shop, player1, player2, player3] = await ethers.getSigners();
        GameEco = await ethers.getContractFactory('MultipleNFT');

        gameEco = await GameEco.deploy();
    });

    it("Should add new player", async function () {
        await gameEco.addPlayer(player1.address, true); // is VIP
        await gameEco.addPlayer(player2.address, false); // isn't VIP

        expect(await gameEco.isPlayerExist(player1.address)).to.equal(true);
        expect(await gameEco.isPlayerExist(player2.address)).to.equal(true);
        expect(await gameEco.isPlayerExist(player3.address)).to.equal(false);
    });

    it("Should mint VNDGAME to new player", async function () {
        await gameEco.addPlayer(player1.address, true); // is VIP
        await gameEco.addPlayer(player2.address, false); // isn't VIP

        expect(await gameEco.balanceOf(player1.address, VNDGAME)).to.equal(1500);
        expect(await gameEco.balanceOf(player2.address, VNDGAME)).to.equal(1000);
        expect(await gameEco.balanceOf(player3.address, VNDGAME)).to.equal(0);
    });

    it("Should transfer tokens", async function () {
        await gameEco.addPlayer(player1.address, true); // is VIP
        await gameEco.addPlayer(player2.address, false); // isn't VIP
        await gameEco.addPlayer(player3.address, true); // is VIP

        // transfer, transferfrom ?

        expect(await gameEco.balanceOf(player1.address, VNDGAME)).to.equal(1500);
        expect(await gameEco.balanceOf(player2.address, VNDGAME)).to.equal(1000);
        expect(await gameEco.balanceOf(player3.address, VNDGAME)).to.equal(0);
    });
    // transfer

    // batch transfer
});