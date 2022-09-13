

const listaDeUsuarios = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const carlos = listaDeUsuarios.find((usuario, index, array) => usuario.nome === 'Carlos');


/*
   Esse método é usado quando queremos encontrar algum elemento dentro no Array.
   Para isso, passamos uma função que irá retornar true ou false. 
   O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
*/

