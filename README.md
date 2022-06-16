# NFT-basic
Having fun at BAP, we learn about ERC721, ERC1155, IPFS and list [some NFTs on OpenSea](https://testnets.opensea.io/collection/cupnft-v2) (Rinkeby testnet).

Steps to list an NFT collection on OpenSea:
- Deploy your ERC721 or ERC1155 contract on Rinkeby testnet.
- Verify the deployed contracts.
- Prepare metadata json file. Your json 's fields should be correct so OpenSea can parse and show your collection 's infor (see our json file format [here](https://ipfs.io/ipfs/QmWVFagtK7uWpFSE5336wyrwUrKK1ETV7f84KmmvFQkrb9)).
- Upload image & metadata files to the internet (we upload to IPFS and use Pinata to pin our files).
- Start minting NFTs.
- Enter contract's address on OpenSea.
