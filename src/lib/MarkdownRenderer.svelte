<script>
	import { marked } from 'marked';
	import hljs from 'highlight.js';

	export let source = '';

	marked.setOptions({
		highlight: function (code, lang) {
			return hljs.highlight(code, { language: lang }).value;
		}
	});

	var output = marked(source);

	// console.log(output);
</script>

<div>{@html output}</div>
