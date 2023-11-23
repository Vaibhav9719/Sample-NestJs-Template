import bcrypt from 'bcrypt';
import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  scryptSync,
} from 'crypto';

import type { Optional } from '../types';

const IV = randomBytes(16);
const SECRET_KEY = 'MantraHashingPassword';
const ALGORITHM = 'aes-256-ctr';

/**
 * generate hash from password or string
 * @param {string} password
 * @returns {string}
 */
export function generateHash(password: string): string {
  return bcrypt.hashSync(password, 10);
}

/**
 * validate text with hash
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
export function validateHash(
  password: Optional<string>,
  hash: Optional<string>,
): Promise<boolean> {
  if (!password || !hash) {
    return Promise.resolve(false);
  }

  return bcrypt.compare(password, hash);
}

export function getVariableName<TResult>(getVar: () => TResult): string {
  const m = /\(\)=>(.*)/.exec(
    getVar.toString().replace(/(\r\n|\n|\r|\s)/gm, ''),
  );

  if (!m) {
    throw new Error(
      "The function does not contain a statement matching 'return variableName;'",
    );
  }

  const fullMemberName = m[1];

  const memberParts = fullMemberName.split('.');

  return memberParts[memberParts.length - 1];
}

export function encryptedResponse(response: string) {
  const key = scryptSync(SECRET_KEY, 'salt', 32);
  const cipher = createCipheriv(ALGORITHM, key, IV);

  return Buffer.concat([cipher.update(response), cipher.final()]);
}

export function decryptRequest(request) {
  const key = scryptSync(SECRET_KEY, 'salt', 32);
  const decipher = createDecipheriv(ALGORITHM, key, IV);

  return Buffer.concat([
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    decipher.update(request),
    decipher.final(),
  ]);
}
