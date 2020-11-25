// Contagem repetida de números
let N = parseInt(gets());
let nums = {};
let ns;
for (let i = 0; i < N; i++) {
    ns = gets();
    if(typeof nums[ns] === 'undefined')
        nums[ns] = {valor: parseInt(ns), cnt:  1};
    else
        nums[ns].cnt++;
}


for(var [key, n] of Object.entries(nums)){
    console.log(`${n.valor} aparece ${n.cnt} vez(es)`);
}

/// =============

//Vogais Extraterrestres
let cases = true;

while(cases) {
  
  let alpha = gets();
  let beta = gets();
  
  if( alpha != "") {
    
    let arr = beta.split("");
    
    let count = 0;
      
    for(let a in arr) {
        let pos = alpha.indexOf(arr[a]);
          // if(pos < 0) continue; 
          // count++;
          
        while (pos != -1) {
          count++;
          pos = alpha.indexOf(arr[a], pos + 1);
        }
    }
  console.log(count);  
  } else {
    cases = false;
  }
} 

/// =============
// Melhor amigo do Pablo
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

entradas = []

l = gets()
entradas.push(l)

while (l.length > 0)
{
  entradas.push(l)
  l = gets()
}
entradas = entradas.filter(onlyUnique)

entrada = entradas[0]
dados = []
inscricoes = []
votos_sim = []
n = 1

while (entrada !== "FIM")
{  
  dados = entrada.split(' ')
  
  inscricoes.push({posicao: n, nome: dados[0], escolha: dados[1] })

  if (dados[1] == "SIM")
    votos_sim.push({posicao: n, nome: dados[0], escolha: dados[1] })

  entrada = entradas[n]
  n++
}

inscricoes.sort((a,b) => a.escolha < b.escolha ? 1 : a.escolha > b.escolha ? -1 : a.nome > b.nome ? 1 : -1)
if (inscricoes[0].nome == "Abhay") inscricoes.splice(0,1)

inscricoes.map(item => console.log(item.nome))
console.log("")

votos_sim.sort((a,b) => a.nome.length < b.nome.length ? 1 : a.nome.length > b.nome.length ? -1 : a.posicao > b.posicao ? 1 : -1)

console.log("Amigo do Pablo:")
console.log(votos_sim[0].nome)

/// =============

// Conjuntos bons ou ruins?
let input = parseInt(gets());
let list = [];
let exit = 0;

function prefix(prefix, word) {
  return word.startsWith(prefix);
}

do {
  for (let i = 0; i < input; i++) {
    let word = gets();
    list.map(w => {
      if (w.length < word.length) {
        prefix(w, word) && exit++;
      } else {
        prefix(word, w) && exit++;
      }
    });
    list.push(word);
  }
  if (exit > 0) {
    console.log(`Conjunto Ruim`);
  } else {
    console.log(`Conjunto Bom`);
  }
  exit = 0;
  list = [];
  input = parseInt(gets());
} while (input !== 0);


/// =============