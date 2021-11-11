const CONTRACT_ADDRESS = '0x8Fd0d66D2B769f3C20B9Abad12Fab13695e264dF';

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