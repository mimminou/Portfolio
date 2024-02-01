<svelte:options accessors={true} />

<script>
    export let DOMElement;
    export const name = "Complex";
    export const classname = "complex_div";
</script>

<div class="complex_div" bind:this={DOMElement}>
    <div class="left_complex">
        <img
            id="complex_img1"
            src="./assets/Vector-art.png"
            height="auto"
            alt="background art"
        />
        <img
            id="complex_img2"
            src="./assets/PARP1_DNA.png"
            height="auto"
            alt="PARP1 With DNA"
        />
    </div>

    <div class="right_complex">
        <p class="paragraph text-3xl sm:text-6xl">
            But also <span style="color:#FF5757;">complex</span>
            and <span style="color:#AA79E6;">scalable</span> stuff
        </p>
    </div>
</div>

<style>
    .complex_div {
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        background-color: #d1d1d1;
    }

    .left_complex {
        width: 50vw;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
    }

    .right_complex {
        display: flex;
        align-items: center;
        width: 50vw;
        padding-left: 5%;
        padding-right: 5%;
        font-family: "League Spartan", monospace;
        color: #505050;
    }

    #complex_img1 {
        width: 30vw;
        max-width: 30vw;
        transform: translate(60%, 0);
    }

    #complex_img2 {
        width: 40vw;
        max-width: 40vw;
        transform: translate(-40%, -0%);
    }

    @media (max-width: 480px) {
        .complex_div {
            flex-direction: column;
            align-items: center;
        }

        .left_complex {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 50svh;
        }

        #complex_img1 {
            width: 50%;
            max-width: 70%;
            transform: translate(0, 75%);
        }

        #complex_img2 {
            max-width: 70%;
            width: 80%;
            transform: translate(0, -30%);
        }

        .right_complex {
            display: flex;
            align-items: center;
            text-align: center;
            width: 90vw;
            height: 30svh;
        }
    }
</style>
