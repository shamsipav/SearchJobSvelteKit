<script lang="ts">
    export let num: number;
    export let title: string;
    export let color: string;

    let colorValue: string;
    
    if (color == "blue") {
        colorValue = "#1e4391";
    } else if (color == "red") {
        colorValue = "#ef302b";
    }
</script>

<ul class="step" style="--color: {colorValue}">
    <li class="step__item">
        <span class="step__number">{num}</span>
        <p class="step__heading">{title}</p>
    </li>
    {#if $$slots.first}
        <li class="step__item deadlines">          
            <p class="step__item-title">
                <slot name="first" />
            </p>
        </li>
	{/if}
    {#if $$slots.second}
        <li class="step__item deadlines">          
            <p class="step__item-title">
                <slot name="second" />
            </p>
            <div class="step__item-schedule">
                <p>Очная форма обучения:</p>
                <span>20.06 - 08.08</span>
            </div>
            <div class="step__item-schedule">
                <p>Очно-заочная форма обучения:</p>
                <span>20.06 - 08.08</span>
            </div>
        </li>
	{/if}
    {#if $$slots.third}
        <li class="step__item">
            <p class="step__item-title">
                <slot name="third" />
            </p>
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
        background-color: var(--color);
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
        background-color: var(--color);
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

    .step__item {
        position: relative;
    }

    .step__item:not(:last-child) {
        margin: 0px 0px 26px 0px;
    }

    .step__item:first-child {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0px 0px 26px 0px;
        height: 44px;
    }

    .step__item:not(:first-child) {
        padding: 0px 0px 0px 60px;
    }

    .deadlines::before {
        top: 5px !important;
    }

    .step__item-title {
        position: relative;
        font-size: 16px;
        line-height: 140%;
    }

    .step__item-title::before {
        position: absolute;
        content: "";
        top: 50%;
        transform: translateY(-50%);
        left: -47px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px solid var(--color);
        background-color: #fff;
    }

    .deadlines .step__item-title {
        margin: 0px 0px 10px 0px;
    }

    .step__item-schedule {
        position: relative;
    }

    .step__item-schedule:not(:last-child) {
        margin: 0px 0px 20px 0px;
    }

    .step__item-schedule p {
        font-size: 14px;
        margin: 0px 0px 10px 0px;
        opacity: 0.6;
    }

    .step__item-schedule span {
        display: block;
        font-size: 14px;
        color: var(--color);
    }
</style>