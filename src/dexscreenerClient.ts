import { PublicKey } from '@solana/web3.js';
import axios, { AxiosResponse } from 'axios';

interface PriceInfo {
    // todo
}

interface TokenPair {
    // todo
}

class DexScreenerClient {
    /**
     * Validates token address to be a valid Solana address
     * 
     * @param {string} tokenAddress - The token address to validate
     * @throws {InvalidSolanaAddress|NoPositionsError}
     */
    static validateTokenAddress(tokenAddress: string): boolean {
        try {
            new PublicKey(tokenAddress);
        } catch {
            return false
        }
        return true
    }

    /**
     * Validates multiple token addresses
     * 
     * @param {string[]} tokenAddresses - List of token addresses to validate
     * @throws {InvalidSolanaAddress|NoPositionsError}
     */
    static validateTokenAddresses(tokenAddresses: string[]): void {
        // TODO: Implement this method
    }

    /**
     * Validates the API response to ensure it's a 200 OK response
     * 
     * @param {AxiosResponse} resp - Axios response object
     * @throws {InvalidTokens}
     */
    static validateResponse(resp: AxiosResponse): void {
        // TODO: Implement this method
    }

    /**
     * Calls DexScreener API for a single token
     * 
     * @param {string} tokenAddress - Token address to fetch data for
     * @returns {Promise<any>} - JSON response from API
     */
    async callApi(tokenAddress: string): Promise<any> {
        // TODO: Implement this method
    }

    /**
     * Calls DexScreener API for multiple tokens
     * 
     * @param {string[]} tokenAddresses - List of token addresses to fetch data for
     * @returns {Promise<any>} - JSON response from API
     */
    async callApiBulk(tokenAddresses: string[]): Promise<any> {
        // TODO: Implement this method
    }

    /**
     * Fetch prices for a list of tokens
     * 
     * @param {string[]} tokenAddresses - List of tokens to fetch prices for
     * @returns {Promise<any>} - Mapping of token address to PriceInfo
     */
    async fetchPricesDex(tokenAddresses: string[]): Promise<any> {
    }

    /**
     * Finds the largest liquidity pool with SOL for a token
     * 
     * @param {TokenPair[]} tokenPairs - List of token pair objects from the API response
     * @param {string} address - Token address to find the largest pool for
     * @returns {TokenPair} - The token pair with the largest liquidity in USD
     */
    static findLargestPoolWithSol(tokenPairs: TokenPair[], address: string): TokenPair {
        let largestPoolWithSol = {};

        for (const entry of tokenPairs) {
          // RETURN THE POOL WITH THE LARGES LIQUIDITY VALUE AND PAIR TOKEN AS SOL

        }

        return largestPoolWithSol;
    }
}

export default DexScreenerClient;




