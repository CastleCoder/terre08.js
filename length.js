const args = process.argv.slice(2);

function length(a){
  
  if(typeof a === "string" && isNaN(a) && args.length===1){
    let arglength = a.length;
    if(arglength===1){
      console.log(`La taille du premier argument est de ${arglength} caractère.`)
    } else if (arglength>1){
    console.log(`La taille du premier argument est de ${arglength} caractères.`)
    }
  } else{
    console.log("Il y a une erreur, bravo !")
  }
}

if (args.length!==1){
  console.log("Il doit y avoir une seule chaine de caractère.")
}

length(args[0]);


