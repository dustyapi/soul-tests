import { PublicKey } from "@solana/web3.js";

export const isSolanaAddress = (address : string) => {
    try {
        new PublicKey(address);
    } catch {
        return false
    }
    return true;
} 