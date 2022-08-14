<script>
import { createEventDispatcher } from "svelte"

    export let NavBarButtons
    export let visibleSection
    $: visibleSectionChanged = visibleSection
    const dispatch = createEventDispatcher()
    

    function passNavData(index){
        dispatch("navClicked", {index : index})
    }

</script>


<div class="navbar">

    {#each NavBarButtons as button, index}
        <div
        on:click={()=>passNavData(index)}
        class:nvbrButton={true}
        class:unSelected={index != visibleSectionChanged}
        class:selected={index === visibleSectionChanged}>

        </div>
    {/each}
</div>


<style>
    
    .navbar{
        display: flex;
        flex-direction: column;
        gap: 4vh;
        width: fit-content;
        position: fixed;
        right: 4vw;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
    }

    .nvbrButton{
        height: 10px;
        width: 10px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        display: inline-block;
    }

    .selected {
        background-color: rgba(255, 255, 255, 1);
        transition: background-color 1s;
    }

    .unSelected {
        background-color: rgba(255, 255, 255, 0.2);
        transition: background-color 1s;
    }
    
</style>
