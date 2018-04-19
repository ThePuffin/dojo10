function crypto(motdepasse, hash) {
  let tabMDP = [...motdepasse];
  let tabHash = [...hash];
  //console.log(tabHash);

  let resultab = [];
  tabMDP.forEach(elementMDP => {
    const result = tabHash.filter(
      elementhash => elementhash.toLowerCase() == elementMDP
    );
    resultab.push(result[0].toLowerCase());
  });
  //   console.log(resultab);
  //   console.log(resultab.join(""));
  let compare = Object.is(motdepasse, resultab.join(""));
  console.log(compare);
}

crypto("mdp", "daMdtp");
