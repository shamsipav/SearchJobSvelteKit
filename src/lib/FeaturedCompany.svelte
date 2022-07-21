<script lang="ts">
    export let logo: string;
    export let name: string;
</script>

<div class="company">
    <img src="{logo}" alt="companyLogo">
    <p class="company__name">{name}</p>
</div>

<style>
    img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin: 0px 0px 30px 0px;
    }
    .company {
		height: 220px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid #ebecf1;
        border-radius: 12px;
	}
    .company__name {
        font-size: 22px;
    }
</style>