<script lang="ts">
	import Button from './Button.svelte';
    import Modal from './Modal.svelte';

    let modal: any;
</script>
<header>
    <div class="container">
        <div class="header__logo">Company Logo</div>
        <nav>
            <ul>
                <li><a href="/" class="link">Jobs</a></li>
                <li><a href="/" class="link">Companies</a></li>
                <li><a href="/" class="link">Post a Job</a></li>
                <li><a href="/" class="link">Resume Search</a></li>
                <li><a href="/" class="link">Prising</a></li>
            </ul>
        </nav>
        <div class="header__auth">
            <Button>Sign in</Button>
            <span class="line"></span>
            <Button on:click={modal.open}>Sing Up</Button>
        </div>
    </div>
</header>

<Modal bind:this={modal}>
    <form action="#">
    	<p class="form__heading">Sing Up</p>
    	<div class="form__content">
    		<div class="form__item">
    			<label for="name">Name</label>
    			<input id="name" type="text">
    		</div>
    		<div class="form__item">
    			<label for="email">Email</label>
    			<input id="email" type="email">
    		</div>
    		<div class="form__item">
    			<label for="password">Password</label>
    			<input id="password" type="password">
    		</div>
    	</div>
    	<Button variant="singup" on:click={modal.close}>Register now</Button>
    </form>
</Modal>

<style>
    header {
        padding: 50px 0px 0px 0px;
    }
    .container {
        display: flex;
        align-items: center;
    }
    .header__logo {
        margin: 0px 148px 0px 0px;
        font-weight: bold;
    }
    nav {
        margin: 0px auto 0px 0px;
    }
    nav ul {
        display: flex;
    }
    nav ul li:not(:last-child) {
        margin: 0px 30px 0px 0px;
    }
    .header__auth {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 17px;
        align-items: center;
    }
    .line {
        position: relative;
        top: 2px;
        width: 2px;
        height: 50%;
        background-color: #516193;
    }
    
    	.form__heading {
		font-family: "Qanelas";
    	font-weight: 800;
		color: #367cff;
		font-size: 32px;
		text-align: center;
	}
	.form__heading, .form__content {
		margin: 0px 0px 40px 0px;
	}
	.form__item {
		display: flex;
		flex-direction: column;
		max-width: 70%;
		margin: 0 auto;
	}
	.form__item:not(:last-child) {
		margin-bottom: 20px;
	}
	.form__item input {
		padding: 0px 0px 1px 0px;
		border-bottom: 1px solid #367cff;
		font-size: 20px;
	}
	.form__item label {
		margin: 0px 0px 5px 0px;
		color: #516193;
	}
</style>