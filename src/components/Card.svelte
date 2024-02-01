<script>
	export let title;
	export let img;
	export let link;
	export let techs;
</script>

<div
	class="Card flex justify-center items-center flex-row sm:flex-col rounded-lg h-[20svh] sm:h-[70svh] w-[80vw] sm:w-[20vw]"
>
	{#if link != ""}
		<a
			href={link}
			target="_blank"
			class="w-full h-full imgDiv rounded-l-lg rounded-r-3xl sm:rounded-t-lg sm:rounded-b-3xl"
		>
			<img
				class="max-h-[80%] max-w-[80%] sm:max-h-full sm:max-w-full"
				src={img}
				alt=""
			/>
		</a>
	{:else}
		<div
			class="w-full h-full imgDiv rounded-l-lg rounded-r-3xl sm:rounded-t-lg sm:rounded-b-3xl"
		>
			<img class="projectImg" src={img} alt="" />
		</div>
	{/if}

	<div class="infoDiv min-w-[20vw] h-full">
		<span class="title text-lg sm:text-3xl">{title}</span>
		<ul
			class="flex flex-col content-start items-start list-disc list-inside"
		>
			{#each techs as tech}
				<li class="tech text-start text-sm sm:text-2xl">
					{tech}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.Card {
		background-color: #d1d1d1;
	}
	.imgDiv {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		flex-basis: 50%;
		padding: 1em;
	}
	.projectImg {
		max-height: 100%;
		max-width: 100%;
	}
	.infoDiv {
		padding: 1em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		flex-basis: 50%;
		font-family: "League Spartan", monospace;
	}
	.title {
		text-align: center;
		color: #505050;
		font-weight: bold;
	}
	.tech {
		text-align: left;
		color: #505050;
	}
</style>
