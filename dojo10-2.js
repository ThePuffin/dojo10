// Ecrire une fonction kdigits qui prend en paramètre 2 nombres: n et k tel que:

// kdigits(63289, 2) => On enlève les 2 plus grands nombres, puis on cherche le nombres le plus petit parmis les nombres restants: => "2"

// kdigits(1032, 1) => "1" (sans le 0)

// kdigits(9573, 2) => "3" (sans le 9,7)

// kdigits(48576575, 3) => "4" (sans le 8,7,6)

// kdigits(12131211212, 2) => "1"

// kdigits(111112, 2) => "Aucun K nombre détécté" (sans le 1,2)

// kdigits(1234, 4) => "Aucun K nombre détécté" (sans le 8,7,6)

// kdigits(123, 4) => Erreur (avec la classe Error): "Attention, votre nombre d'extraction est plus grand que le nombre" (sans le 8,7,6)

// Bonus: Modifier la fonction afin qu'elle retourne LES K nombres plus petits:

// kdigits(9573, 2) => [3,5] (sans le 9,7)

function kdigits(n, k) {
  let tabN = [...n.toString()];

  tabN = tabN.map(string => parseInt(string)).sort();
  //console.log(tabN);

  const tableauSimple = tabN.filter(
    (item, pos, self) => self.indexOf(item) === pos
  );
  console.log(tableauSimple);

  if (k > tabN.length) {
    console.log(
      "Attention, votre nombre d'extraction est plus grand que le nombre"
    );
  } else if (k == tableauSimple.length) {
    console.log("Aucun K nombre détecté");
  } else {
    if (tableauSimple[0] !== 0) {
      console.log(tableauSimple[0]);
    } else {
      console.log(tableauSimple[1]);
    }
  }
}

kdigits(6302899, 4);
// kdigits(111112, 2);
