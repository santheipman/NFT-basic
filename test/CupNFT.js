const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("CupNFT", function () {
    let owner;
    let user;
    let token;
    const firstURI = "https://ipfs.io/ipfs/QmWVFagtK7uWpFSE5336wyrwUrKK1ETV7f84KmmvFQkrb9"; // 1.json
    const secondURI = "https://ipfs.io/ipfs/QmaBDqiTBrK9mddeBqdfVfJUGfbQDqxqx6zTw59WEfdSMH"; // 2.json
    beforeEach(async function() {
        [owner, user] = await ethers.getSigners();
        Token = await ethers.getContractFactory('CupNFT');

        token = await Token.deploy();
    });

    it("Should mint NFT to specified user", async function () {
        await token.mintNFT(owner.address, firstURI);
        await token.mintNFT(user.address, secondURI);

        expect(await token.ownerOf(1)).to.equal(owner.address);
        expect(await token.ownerOf(2)).to.equal(user.address);
    });

    it("Should set URI correctly", async function () {
        await token.mintNFT(owner.address, firstURI);
        await token.mintNFT(user.address, secondURI);

        expect(await token.tokenURI(1)).to.equal(firstURI);
        expect(await token.tokenURI(2)).to.equal(secondURI);
    });
});