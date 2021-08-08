import React, { FC, useMemo } from 'react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import {
    getLedgerWallet,
    getMathWallet,
    getPhantomWallet,
    getSolflareWallet,
    getSolletWallet,
    getSolongWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import {
    WalletDialogProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-material-ui';

export const Wallet: FC = () => {
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
    // Only the wallets you want to instantiate here will be compiled into your application
    const wallets = useMemo(() => [
        getPhantomWallet(),
        getSolflareWallet(),
        getTorusWallet({
            options: { clientId: 'Go to https://developer.tor.us and create a client ID' }
        }),
        getLedgerWallet(),
        getSolongWallet(),
        getMathWallet(),
        getSolletWallet(),
    ], []);

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <WalletDialogProvider>
                <WalletMultiButton/>
                <WalletDisconnectButton/>
            </WalletDialogProvider>
        </WalletProvider>
    );
};
