const { Connection, PublicKey } = solanaWeb3;
const form = document.querySelector("form");

form.onsubmit = async (e) => {
e.preventDefault()
   const amt = document.getElementById("Amount").value

  const publicKeyRecie = document.getElementById("publicKeyRecie").value;

  const connection = new Connection("https://api.devnet.solana.com");
console.log(amt)
const publicKeyObject = new PublicKey(publicKeyRecie);

			// 1e9 lamports = 10^9 lamports = 1 SOL
			let txhash = await connection.requestAirdrop(publicKeyObject, 1e9);
			console.log(`txhash: ${txhash}`);
  
};

