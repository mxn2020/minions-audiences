/**
 * Minions Audiences SDK
 *
 * Ideal customer profiles, niche definitions, market segments, and target audience personas
 *
 * @module @minions-audiences/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Audiences.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
