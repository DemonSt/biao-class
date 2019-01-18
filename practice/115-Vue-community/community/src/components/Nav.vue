<template>
    <div class="first-screen">
        <div class="nav global">
            <a class="logo" href="#">logo</a>
            <div class="ling-group">
                <a href="#">技术</a>
                <a href="#">事业</a>
                <a href="#">生活</a>
                <a href="#">文化</a>
                <a href="#">科技</a>
                <a href="#">更多资源</a>
            </div>
            <button>联系我们</button>
        </div>
        <div class="center">
            <div class="title">Damon博客</div>
            <div class="sub-title">我干了什么 , 究竟拿时间换了什么</div>
        </div>
        <div class="moon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="moon-curve-svg" preserveAspectRatio="none" width="1440px" height="51px" viewBox="0 0 1440 51" version="1.1">
                <path fill="#ffffff" d="M1440,50.7652095 C1440,50.7652095 1077.44727,0 720,0 C362.552734,0 0,50.7652095 0,50.7652095 L1440,50.7652095 Z" id="path-1"/>
            </svg>
        </div>
    </div>
</template>

<script></script>

<style>
    .first-screen {
        background: #2a2e31;
        height: 23.36vw;
        color: #fefefe;
    }
    
    .first-screen .nav.global {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .first-screen .nav.global .logo {
        font-weight: bolder;
        font-size: 2rem;
        color: inherit;
        margin: 1rem;
    }
    
    .first-screen .nav.global .ling-group a {
        color: inherit;
        display: inline-block;
        padding: 1rem 1.5rem;
    }
    
    .first-screen  .nav.global .ling-group a:hover {
        color: #ddd;
    }
    
    .first-screen .nav.global button {
        border: #fefefe 1px solid;
        background: transparent;
        color: inherit;
        font-size: .8rem;
        font-weight: bold;
        padding: .6rem .7rem;
        margin: 1rem;
    }
    
    .first-screen .center {
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    
    .first-screen .center .title {
        font-size: 3.6rem;
        font-weight: bolder;
    }
    
    .first-screen .center .sub-title {
        font-weight: 300;
        font-size: 1.2rem;
    }
    
    .first-screen .moon svg {
        width: 100%;
        position: relative;
        top: 93px;
    }
</style>
