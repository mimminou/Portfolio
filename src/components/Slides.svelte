<script>
    import { onMount, createEventDispatcher } from 'svelte'
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide'
    import '@splidejs/svelte-splide/css/core'
    let splideInstance
    $: visibleSlideChanged = 0
    const imgSource = "./assets/"
    export let projectsList = []
    const dispatch = createEventDispatcher()
    
    function passSlideIndex(index){
        dispatch("slideChanged", {index : index})
    }
    
    onMount(()=>{
        passSlideIndex(0)
        splideInstance.splide.on( "pagination:updated", (data, prev, current)=> {
            passSlideIndex(current.page)
        })
    })

</script>

<div class="glide">
    <Splide hasTrack={false} aria-label="My Projects" bind:this={splideInstance}
    options={
        {
            type: "loop",
            rewind: true,
            direction : "ltr",
            width : "90%",
            keyboard : "global",
            autoplay: false,
            arrows : false,
            flickPower : 400,
            flickMaxPages : 1,
            perMove : 1,
            
        }
    }>
        <div class="splideWrapper">
            <SplideTrack class="trackDiv">
                {#each projectsList as project}
                    <SplideSlide>
                        <div class="slideDiv">
                            <img class="projectImg" src={imgSource + project.img} alt={project.name}>
                        </div>
                    </SplideSlide>
                {/each}
            </SplideTrack>
            <div class="splide__arrows" />
            <ul class="splide__pagination"> 
            </ul>

        </div>

    </Splide>

</div>  


<style>

    .glide{
        max-height: 100%;
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .splideWrapper{
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0vh;
    }
    
    .slideDiv{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px;
        padding: 0px;
    }

    .projectImg{
        width: 90%;
        height: 80%;
    }

    .splide__pagination{
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 2vw;
    }

    .splide__pagination :global(li > button){
        height: 10px;
        width: 10px;
        background-color: rgba(255, 255, 255, 0.2);
        border: 0px;
        border-radius: 50%;
    }

    .splide__pagination :global(:is(.splide__pagination__page)){
        background-color: rgba(255, 255, 255, 0.2);
        transition: background-color 0.6s;

    }
    .splide__pagination :global(:is(.is-active)){
        background-color: rgba(255, 255, 255, 1);
        transition: background-color 0.6s;
    }



    .splideWrapper :global(.trackDiv > ul){
        display: flex;
        align-items: center; 
    }

</style>
