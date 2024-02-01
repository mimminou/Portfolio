<svelte:options accessors={true} />

<script>
	export let DOMElement;
</script>

<div
	bind:this={DOMElement}
	class="h-[100%] flex justify-center items-center"
></div>
