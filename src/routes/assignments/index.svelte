<script>
	export let data;
</script>

<!-- {#each data.projects as post}
	<a href={`/assignments/${post.slug}`}>
		<div>
			<p>{post.title}</p>
			<p>{post.description}</p>
		</div>
	</a>
	<br />
{/each} -->

<pre>
{JSON.stringify(data, null, 4)}
</pre>
