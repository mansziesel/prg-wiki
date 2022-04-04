<script context="module">
	export function load({ url }) {
		const title = url.searchParams.get('title');
		const tagsStr = url.searchParams.get('tags');
		const author = url.searchParams.get('author');
		const date = url.searchParams.get('date');
		return {
			props: {
				title,
				tagsStr,
				author,
				date
			}
		};
	}

	import './og.css';
</script>

<script>
	export let title, tagsStr, author, date;

	let tags;

	if (tagsStr) {
		tags = tagsStr.split(',');
	}
	// const tags = tagsStr.split(',');
</script>

<div>
	<h1>{title}</h1>
	<ul>
		{#if tags}
			{#each tags as tag}
				<li>{tag}</li>
			{/each}
		{/if}
	</ul>
	<p>{author}</p>
	<p>{date}</p>
</div>
