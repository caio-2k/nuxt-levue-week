// declarar um novo modulo, importando tudo que vem de vue
// importando o vue e exportando por default, funcionamento melhor
// do typescript

declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
