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
        <li class="step-wrapper">
            <div class="step__item">
                <slot name="first" />
            </div>
        </li>
	{/if}
    {#if $$slots.second}
        <li class="step-wrapper">
            <div class="step__item">
                <slot name="second" />
            </div>
        </li>
	{/if}
    {#if $$slots.third}
        <li class="step-wrapper">
            <div class="step__item">
                <slot name="third" />
            </div>
        </li>
	{/if}
    {#if $$slots.fourth}
        <li class="step-wrapper">
            <div class="step__item">
                <slot name="fourth" />
            </div>
        </li>
	{/if}
    {#if $$slots.fifth}
        <li class="step-wrapper">
            <div class="step__item">
                <slot name="fifth" />
            </div>
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

    .step-wrapper {
        position: relative;
    }

    .step-wrapper:not(:last-child)::before {
        content: "";
        position: absolute;
        top: 6px;
        left: 19px;
        width: 2px;
        background-color: var(--step-acccent-color);
        height: 100%;
    }

    .step-wrapper:not(:last-child) {
        padding-bottom: 26px;
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
        margin-right: 20px;
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
        top: 3px;
        left: 13px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid var(--step-acccent-color);
        background-color: #fff;
    }

    .step__head {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 26px;
        height: 44px;
    }

    .step__head::before {
        content: "";
        position: absolute;
        top: 40px;
        left: 19px;
        width: 2px;
        background-color: var(--step-acccent-color);
        height: 100%;
    }

    .step__item {
        padding-left: 60px;
    }
</style>