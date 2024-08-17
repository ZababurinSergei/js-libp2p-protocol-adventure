import { respond } from '../index.mjs'
import { finder, resolver } from './solution.mjs'

const protocol = '/otg/1.0.0'

// let buffer = [Uint8Array.from([4, 1, 2, 3])];
// const multiaddress = await respond(protocol)
// imperativeProtocols(multiaddress, protocol)
// dial(multiaddress, protocol, buffer)

export { finder, resolver }