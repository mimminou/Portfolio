<svelte:options accessors={true}/>
<script>

    export let DOMElement
    export const name = "Simple"
    export const classname = "simple_div"
</script>


<div bind:this={DOMElement} class="simple_div">

    <div class="left_simple">
        <p>I can build <span style="color:#E94F8D;">simple</span> and <br>
        <span style="color:#6A79FF;">minimal</span> stuff</p>
    </div>

    <div class="right_simple">
        <img id="img_simplebg" src="./assets/Vector_simple.png" width="500" height="auto" alt="simple div :D">
        <img id="img_simpe_cone" src="./assets/Cone.png" width="520" height="auto" alt="simple cone">

    </div>
</div>


<style>
.simple_div{
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    background-color: #D1D1D1;
}

.right_simple{
    position: relative;
    z-index: 99;
}

.left_simple{
    position: relative;
    top: 20vh;
    font-family: "League Spartan", monospace;
    font-size: 4em;
    margin: 0px 0px 0px 5vw;
    padding: 5px 0px 5px 0px;
    color: #505050;
    z-index: 100;
    
}

#img_simplebg{
    position: absolute;
    right: 8vw;
    top: 10vh;

}

#img_simpe_cone{
    position: absolute;
    right: 5vw;
    top: -8vh;


}
</style>
