<script>
	import { marked } from 'marked';
	export let source = '';
	const renderer = new marked.Renderer();
	$: pageContent = marked(source, { renderer });
</script>

<div>{@html pageContent}</div>
