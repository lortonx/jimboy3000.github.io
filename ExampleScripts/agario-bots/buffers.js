const Writer = require('./writer')

module.exports = {
    protocolVersion(version){
        const writer = new Writer(5)
        writer.writeUint8(254)
        writer.writeUint32(version)
        return writer.buffer
    },
    clientVersion(version){
        const writer = new Writer(5)
        writer.writeUint8(255)
        writer.writeUint32(version)
        return writer.buffer
    },
    spawn(name,token){
		//token=token||''
		token = token.join("")
		console.log(token)
        let buf = new Buffer.alloc(3 + name.length + token.length);
        buf.writeUInt8(0, 0);
        buf.write(name, 1);
        buf.write(token, 2 + name.length);
        return buf		
    },
    move(x, y, key){
        const writer = new Writer(13)
        writer.writeUint8(16)
        writer.writeInt32(x)
        writer.writeInt32(y)
        writer.writeInt32(key)
        return writer.buffer
    }
}
