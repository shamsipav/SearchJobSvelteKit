<footer>
    <div class="container">
        <div class="line"></div>
        <div class="nav">
            <div class="nav__item">
                <p class="nav__heading">Home</p>
                <ul>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Terms & Conditions</a></li>
                </ul>
            </div>
            <div class="nav__item">
                <p class="nav__heading">Employer</p>
                <ul>
                    <li><a href="/">Post a job</a></li>
                    <li><a href="/">Search Resumes</a></li>
                    <li><a href="/">Sign in</a></li>
                </ul>
            </div>
            <div class="nav__item">
                <p class="nav__heading">Job Seeker</p>
                <ul>
                    <li><a href="/">Find jobs</a></li>
                    <li><a href="/">Create Resumes</a></li>
                    <li><a href="/">Sign in</a></li>
                </ul>
            </div>
        </div>
        <div class="social">
            <ul>
                <li class="_icon-facebook2"><a href="/">Facebook</a></li>
                <li class="_icon-twitter"><a href="/">Twitter</a></li>
                <li class="_icon-instagram"><a href="/">Instagram</a></li>
                <li class="_icon-linkedin"><a href="/">Linkedln</a></li>
            </ul>
        </div>
        <p class="copy">Copyright 2008-2019 Powered by Job Board Software</p>
    </div>
</footer>

<style>
    footer {
        padding: 100px 0px 180px 0px;
    }
    .line {
        width: 100%;
        height: 1px;
        background-color: #ebecf1;
        margin-bottom: 50px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 100px;
    }
    .nav__heading {
        font-weight: bold;
        margin: 0px 0px 10px 0px;
    }
    li a {
        font-size: 14px;
        line-height: 150%;
    }
    .social {
        padding: 10px 0px 0px 0px;
        margin: 0px 60px 0px 0px;
    }
    .social li a {
        margin: 0px 0px 0px 10px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }
    .social li:not(:last-child) {
        line-height: 130%;
    }
    .copy {
        flex-basis: 100%;
        text-align: center;
        margin-top: 50px;
        font-size: 14px;
        color: lightgrey;
    }
</style>