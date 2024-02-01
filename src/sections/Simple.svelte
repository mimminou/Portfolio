<svelte:options accessors={true} />

<script>
    export let DOMElement;
    export const name = "Simple";
    export const classname = "simple_div";
</script>

<div bind:this={DOMElement} class="simple_div">
    <div class="left_simple text-3xl sm:text-6xl">
        <p class="paragraph">
            I can build <span style="color:#E94F8D;">simple</span> and
            <span style="color:#6A79FF;">minimal</span> stuff
        </p>
    </div>

    <div class="right_simple">
        <img
            id="img_simplebg"
            src="./assets/Vector_simple.png"
            height="auto"
            alt="simple div :D"
        />
        <img
            id="img_simpe_cone"
            src="./assets/Cone.png"
            height="auto"
            alt="simple cone"
        />
    </div>
</div>

<style>
    .simple_div {
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        background-color: #d1d1d1;
    }

    .right_simple {
        width: 50vw;
        display: flex;
        justify-content: center;
        flex-grow: 1;
        align-items: center;
    }

    .left_simple {
        display: flex;
        align-items: center;
        width: 50vw;
        font-family: "League Spartan", monospace;
        padding-left: 5%;
        padding-right: 5%;
        color: #505050;
    }

    #img_simplebg {
        transform: translateX(70%);
        width: 35vw;
    }

    #img_simpe_cone {
        width: 50vw;
        transform: translate(-40%, -10%);
    }

    @media (max-width: 480px) {
        .simple_div {
            flex-direction: column;
            align-items: center;
            gap: 5%;
        }

        .left_simple {
            text-align: center;
            width: 90vw;
            justify-content: center;
            align-items: center;
            height: 50svh;
        }

        .right_simple {
            width: 100%;
            height: 50svh;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #img_simplebg {
            transform: translate(0, 40%);
            width: 60%;
            max-width: 70%;
        }

        #img_simpe_cone {
            width: 80%;
            max-width: 90%;
            transform: translate(0, -60%);
        }
    }
</style>
