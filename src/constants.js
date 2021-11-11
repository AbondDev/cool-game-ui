const CONTRACT_ADDRESS = '0x7243b5Bb155DeF72EAbe2Ea0241eBe7DB5ad672F';

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
export {CONTRACT_ADDRESS, transformCharacterData};