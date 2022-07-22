<script lang="ts">
    type СolorType = "blue" | "red";

    export let num: number;
    export let title: string;
    export let color: СolorType;

    let colorValue: string;
    
    if (color == "blue") {
        colorValue = "#1e4391";
    } else if (color == "red") {
        colorValue = "#ef302b";
    }

</script>

<ul class="step" style:--step-acccent-color={colorValue}>
    <li class="step__head">
        <span class="step__number">{num}</span>
        <p class="step__heading">{title}</p>
    </li>
    {#if $$slots.first}
        <li class="step__item">
            <slot name="first" />
        </li>
	{/if}
    {#if $$slots.second}
        <li class="step__item">
            <slot name="second" />
        </li>
	{/if}
    {#if $$slots.third}
        <li class="step__item">
            <slot name="third" />
        </li>
	{/if}
    {#if $$slots.four}
        <li class="step__item">
            <slot name="four" />
        </li>
	{/if}
    {#if $$slots.five}
        <li class="step__item">
            <slot name="five" />
        </li>
	{/if}
</ul>

<style>   
    .step {
        position: relative;
        line-height: 1;
        font-family: "Mont";
        min-width: 360px;
        color: rgba(0, 0, 0, 1);
    }

    .step::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 19px;
        width: 2px;
        background-color: var(--step-acccent-color);
        height: calc(100% - 20px);
    }

    .step__number {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--step-acccent-color);
        font-size: 24px;
        line-height: 120%;
        color: #fff;
        margin: 0px 20px 0px 0px;
    }

    .step__heading {
        font-size: 18px;
        line-height: 120%;
        color: #1e4391;
    }

    .step__item, .step__head {
        position: relative;
    }

    .step__item::before {
        position: absolute;
        content: "";
        /* top: 50%; */
        /* transform: translateY(-50%); */
        top: 3px;
        left: 13px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid var(--step-acccent-color);
        background-color: #fff;
    }

    .step__item:not(:last-child) {
        margin: 0px 0px 26px 0px;
    }

    .step__head {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0px 0px 26px 0px;
        height: 44px;
    }

    .step__item {
        padding: 0px 0px 0px 60px;
    }
</style>