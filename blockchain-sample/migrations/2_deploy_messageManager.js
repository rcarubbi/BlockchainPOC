const MessageManager= artifacts.require("MessageManager");
  
module.exports = function(deployer) {
  deployer.deploy(MessageManager);
};