const fs = require('fs');
const path = require('path');
console.log(__dirname);

for (let i =  1; i <=  5; i++) {

  // Creates a JSON object for each NFT
  const json = {
      name: `TobeyContract Data #${i}`, 
      description: `TobeyContract Description #${i}`,
      image: `https://gateway.pinata.cloud/ipfs/QmQD92sFM956BbdLZn4s1Th8CAgfCvMhJL9Dsv95Rm6sBc/${i}.jpeg`,
      attributes: []
  };

  // Writes the JSON object to a file
  fs.writeFileSync(
    path.join(__dirname, 'TobeyImgData', String(i)),
    JSON.stringify(json)
  );
}
