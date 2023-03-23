const { Connection, PublicKey } = solanaWeb3;
const form = document.querySelector("form");

form.onsubmit = async () => {

   const amt = document.getElementById("Amount").value

  const publicKeyRecie = document.getElementById("publicKeyRecie").value;

  const connection = new Connection("https://api.devnet.solana.com");
console.log(amt)
const p= new PublicKey(publicKeyRecie);

let hash = await connection.requestAirdrop(p, (amt)*(10**9));
console.log(`hash: ${hash}`);
  
};

