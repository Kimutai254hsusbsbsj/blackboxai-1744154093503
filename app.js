document.addEventListener('DOMContentLoaded', () => {
    const scanBtn = document.getElementById('scan-btn');
    const walletInput = document.getElementById('wallet-address');
    const resultsDiv = document.getElementById('results');
    const resultsBody = document.getElementById('results-body');

    scanBtn.addEventListener('click', () => {
        const address = walletInput.value.trim();
        if (!address) {
            alert('Please enter a wallet address or transaction hash');
            return;
        }

        // Show loading state
        scanBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Scanning...';
        scanBtn.disabled = true;

        // Simulate scanning (in a real app, this would call an API)
        setTimeout(() => {
            simulateScan(address);
            scanBtn.innerHTML = 'Scan';
            scanBtn.disabled = false;
        }, 2000);
    });

    function simulateScan(address) {
        // Show results section
        resultsDiv.classList.remove('hidden');
        
        // Clear previous results
        resultsBody.innerHTML = '';

        // Mock data - in a real app this would come from an API
        const mockResults = [
            {
                asset: 'ETH',
                amount: '0.5',
                status: 'Recoverable',
                txHash: '0x123...abc'
            },
            {
                asset: 'USDC',
                amount: '1500',
                status: 'Pending',
                txHash: '0x456...def'
            },
            {
                asset: 'BTC',
                amount: '0.02',
                status: 'Recoverable',
                txHash: '0x789...ghi'
            }
        ];

        // Populate results table
        mockResults.forEach(asset => {
            const row = document.createElement('tr');
            row.className = 'border-b border-gray-200 hover:bg-gray-50';
            
            row.innerHTML = `
                <td class="py-3 px-4 flex items-center">
                    <i class="fas fa-coins text-yellow-500 mr-2"></i>
                    ${asset.asset}
                </td>
                <td class="py-3 px-4">${asset.amount}</td>
                <td class="py-3 px-4">
                    <span class="px-2 py-1 rounded-full text-xs font-medium ${
                        asset.status === 'Recoverable' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                    }">
                        ${asset.status}
                    </span>
                </td>
                <td class="py-3 px-4">
                    <button class="text-indigo-600 hover:text-indigo-800 font-medium recover-btn" 
                            data-tx="${asset.txHash}">
                        Recover
                    </button>
                </td>
            `;
            
            resultsBody.appendChild(row);
        });

        // Add event listeners to recover buttons
        document.querySelectorAll('.recover-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const txHash = e.target.getAttribute('data-tx');
                alert(`In a real app, this would initiate recovery for transaction: ${txHash}`);
            });
        });
    }

    // Example of connecting a wallet (simplified)
    document.querySelector('header button').addEventListener('click', () => {
        alert('In a real app, this would connect to MetaMask or other wallet provider');
    });
});
