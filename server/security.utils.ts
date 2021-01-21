const util = require('util');
import * as crypto from 'crypto';

export const randomBytes = util.promisify(crypto.randomBytes);
