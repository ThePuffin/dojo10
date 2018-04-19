function crypto(motdepasse, hash) {
  let tabMDP = [...motdepasse];
  let tabHash = [...hash];
  //console.log(tabHash);

  let resultab = [];
  tabMDP.forEach(elementMDP => {
    const result = tabHash.filter(
      elementhash => elementhash.toLowerCase() == elementMDP
    );
    result.length > 0 ? resultab.push(result[0].toLowerCase()) : null;
  });
  // console.log(resultab);
  //   console.log(resultab.join(""));
  let compare = Object.is(motdepasse, resultab.join(""));
  console.log(compare);
}

crypto("mdpe", "daMdtp");
