<script lang="ts">
    import Step from '$lib/Step.svelte';
</script>

<Step num={1} title="Узнайте о поступлении" color="blue">
    <svelte:fragment slot="first">
        <p class="step__item-title">Правила приёма</p>
    </svelte:fragment>
    <svelte:fragment slot="second">
        <p class="step__item-title deadlines">Сроки подачи документов</p>
        <div class="step__item-schedule">
            <p>Очная форма обучения:</p>
            <span>20.06 - 08.08</span>
        </div>
        <div class="step__item-schedule">
            <p>Очно-заочная форма обучения:</p>
            <span>20.06 - 08.08</span>
        </div>
    </svelte:fragment>
    <!-- <svelte:fragment slot="third">
        <p class="step__item-title">Цифры приёма</p>
    </svelte:fragment> -->
</Step>

<style>
    .step__item-title {
        font-size: 16px;
        line-height: 140%;
    }

    .deadlines {
        margin-bottom: 16px;
    }

    .step__item-schedule {
        position: relative;
    }

    .step__item-schedule:not(:last-child) {
        margin-bottom: 20px;
    }

    .step__item-schedule p {
        font-size: 14px;
        margin-bottom: 10px;
        opacity: 0.6;
    }

    .step__item-schedule span {
        display: block;
        font-size: 14px;
        color: var(--step-acccent-color);
    }
</style>