import path from 'path';
import { pathToFileURL } from 'url';

/**
 * @param {string} specifier
 * @param {{
 *   conditions: !Array<string>,
 *   parentURL: !(string | undefined),
 * }} context
 * @param {Function} defaultResolve
 * @returns {Promise<{ url: string }>}
 */
export async function resolve(specifier, context, defaultResolve) {
  // Load the file from our Autoload directory
  if (specifier.startsWith('App/')) {
    let absolutePath = path.join(process.cwd(), path.normalize(specifier));

    if (!absolutePath.endsWith('.js')) {
      absolutePath += '.js';
    }

    return {
      url: pathToFileURL(absolutePath).href,
    };
  }

  // Defer to Node.js for all other specifiers.
  return defaultResolve(specifier, context, defaultResolve);
}
