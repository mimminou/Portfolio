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
        <p>
            But also <span style="color:#FF5757;">complex</span> <br />
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
        height: 100vh;
        width: 100%;
        background-color: #d1d1d1;
    }

    .left_complex {
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right_complex {
        display: flex;
        align-items: center;
        width: 50vw;
        font-family: "League Spartan", monospace;
        font-size: 4em;
        color: #505050;
        z-index: 100;
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

    p {
        transform: translate(0, -10%);
        padding: 0;
        margin: 0;
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
            height: 50vh;
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
            height: 50vh;
        }
        p {
            transform: translate(0, -10%);
        }
    }
</style>
