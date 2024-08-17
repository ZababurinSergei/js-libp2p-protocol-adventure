// import { CID } from "multiformats/cid";
// import * as json from 'multiformats/codecs/json'
// import { sha256 } from 'multiformats/hashes/sha2'
// const bytes = json.encode({ hello: 'world' })
import { dial, respond } from './solution.mjs'

const protocol = '/otg/1.0.0'

let buffer = [Uint8Array.from([0, 1, 2, 3])];
const multiaddr = await respond(protocol)

dial(multiaddr, protocol, buffer)

export { dial, respond }