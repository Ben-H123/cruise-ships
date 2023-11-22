function Ship(port) {
    this.startingPort = port;
    this.previousPort = null;
    this.currentPort = port;
};

Ship.prototype.setSail = function (setSail) {

this.startingPort = this.previousPort;

return this.startingPort;
};

Ship.prototype.dock = function (port) {
    this.currentPort = port;
};






module.exports = Ship