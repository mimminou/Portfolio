<script>
    export let icon;
    export let tech;    
</script>

<div>
    <div class="card">
        <div class="iconDiv">
           <!--  todo : make this element an animated component  -->
            {#each icon as iconItem}
                {#if icon.length <= 1}
                    <img src={iconItem} alt="Languages and technologies" height="100">
                {:else}
                    <img src={iconItem} alt="Languages and technologies" height="50">
                {/if}
            
            {/each}

        </div>
        <div class="techDiv">
        {#each tech as techItem }
            <div class="techItem">{techItem}</div>
        {/each}
        </div>
    </div>

</div>

<style>
    .card{
        font-family: "Ubuntu";
        border-radius: 10px;
        border: 2px solid #F1F1F1;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        width: 20vw;
        height: 30vh;
        margin : 5px;
        padding : 5px;
        color: #F1F1F1;
    }

    .card:hover img{
        filter: grayscale(0%);

    }


    .iconDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        margin: 5px;
        padding: 5px;
    }
    
    .iconDiv > img {

        filter: grayscale(100%);


    }

    .techDiv{
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        min-width: 0; 

    }
    
    .techItem{
        border: 1px solid #F1F1F1;
        border-radius: 10px;
        padding: 2px 5px 2px 5px;

    }


</style>
