<svelte:options accessors={true}/>
<script>

    export let DOMElement
    export const name = "Complex"
    export const classname = "complex_div"
</script>

<div class="complex_div" bind:this={DOMElement}>
    <div class="left_complex">
        <img id="complex_img1" src="./assets/Vector-art.png" width="400"height="auto" alt="background art">
        <img id="complex_img2" src="./assets/PARP1_DNA.png" width="480" height="auto"alt="PARP1 With DNA">
    
    </div>
    
    <div class="right_complex">
        <p>But also <span style="color:#FF5757;">complex</span> <br>
        and <span style="color:#AA79E6;">scalable</span> stuff</p>
        
    </div>

</div>


<style>
    .complex_div{
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        height: 100vh;
        width: 100%;
        background-color: #D1D1D1;
    }
    

    .left_complex{
        position: relative;

    }

    .right_complex{
        position: relative;
        top: 20vh;
        font-family: "League Spartan", monospace;
        font-size: 4em;
        margin: 0px 8vw 0px 0px;
        padding: 5px 0px 5px 0px;
        color: #505050;
        z-index: 100;
    }

    #complex_img1{
        position: absolute;
        top: 15vh;
        left: 8vw;
    }    

    #complex_img2{
        position: absolute;
        top: 8vh;
        left: 5vw;
    }

</style>
