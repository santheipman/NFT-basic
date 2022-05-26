// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MultipleNFT is ERC1155, Ownable {
    
    uint256 public constant VNDGAME = 0;
    uint256 public constant CARD = 1;
    uint256 public constant CAMERA = 2;
    uint256 public constant CUP = 3;

    uint256 public constant INITIALMONEY = 1000;
    uint256 public constant VIPBONUS = 500;

    mapping(address => bool) private _isPlayerExist;

    constructor() ERC1155("{id}") {
        _mint(msg.sender, CARD, 100, "");
        _mint(msg.sender, CAMERA, 20, "");
        _mint(msg.sender, CUP, 1, "");
    }

    function isPlayerExist(address player) public view returns(bool) {
        return _isPlayerExist[player];
    }

    function addPlayer(address player, bool isVIP) public onlyOwner {
        require(_isPlayerExist[player] == false, "Player already exists");
        if (isVIP) {
            _mint(player, VNDGAME, INITIALMONEY + VIPBONUS, "");
        }
        else {
            _mint(player, VNDGAME, INITIALMONEY, "");
        }
        _isPlayerExist[player] = true;
    }
}