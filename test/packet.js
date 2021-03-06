/**
 * Created by boba on 08.03.16.
 */
var assert = require('assert');
var WiFiIO = require('../');
describe('Packet', function () {
    describe('#buildPacket', function () {
        var cmd = 0x03;
        var par = 0x04;
        var length = 2 + 1;
        it('test packet content for cmd[' + cmd + '] and parameter[' + par + ']', function () {
            var packet = WiFiIO.prototype._buildPacket(cmd, par);
            assert.equal(packet.length, 8);
            assert.equal(packet[0], 0x55);
            assert.equal(packet[1], 0xAA);
            assert.equal(packet[2], 0x00);
            assert.equal(packet[3], length);
            assert.equal(packet[4], 0x00);
            assert.equal(packet[5], cmd);
            assert.equal(packet[6], par);
            assert.equal(packet[7], length + cmd + par);
            //170,85,0,4,0,131,3,1,139
//{"type":"Buffer","data":[
// 170,85,0,4,0,148,7,0,159,

// 170,85,0,4,0,131,6,1,142,

// 170,85,0,4,0,138,32,0,174]},

            /*
             [USRIoT[home.sashajaparidze.com:8899]] received: {"type":"Buffer","data":[
             170,85,0,4,0,148,7,0,159,
             170,85,0,4,0,138,0,0,142,
             170,85,0,4,0,148,7,0,159,
             170,85,0,4,0,138,0,0,142,
             170,85,0,4,0,148,7,0,159,
             170,85,0,4,0,138,0,0,142,
             170,85,0,4,0,148,7,0,159,
             170,85,0,4,0,138,0,0,142,
             170,85,0,4,0,148,7,0,159,
             170,85,0,4,0,138,0,0,142,
             170,85,0,4,0,148,7,0,159,
             170,85,0,4,0,138,0,0,142,
             170,85,0,4,0,148,7,0,159,
             170,85,0,4,0,131,3,1,139,
             170,85,0,4,0,138,4,0,146]
             }, string:*U   *U  

             */
        });
    });
});