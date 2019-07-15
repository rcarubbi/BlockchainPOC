pragma solidity >=0.4.21 <0.6.0;

contract MessageManager {
  address payable public owner;
  string _message;

  constructor() public {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setMessage(string memory message) public {
    _message = message;
  }

  function getMessage() public view returns(string memory) {
      return _message;
  }

  function destroy() public restricted {
      selfdestruct(owner);
  }
}
