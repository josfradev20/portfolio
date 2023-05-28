import {Button} from '@/components/atoms';
import Link from 'next/link';

async function getPokemonsData() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
	const data = await response.json();
	return data.results;
}

export default async function Home() {
	const data = await getPokemonsData();

	return (
		<>
			<Button color='accent'>Button</Button>
			<Link href='/admin'>Administrador</Link>
			<ul>
				{data.map((pokemon: any) => (
					<li key={pokemon.name}>{pokemon.name}</li>
				))}
			</ul>
		</>
	);
}
