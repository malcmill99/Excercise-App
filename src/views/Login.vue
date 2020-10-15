<template>

<div class="level section">

<div class="level-item">


    <form>
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success">
            Login
            </button>
        </p>
        </div>
    </form>
    </div>
</div>
</template>

<!--<script>
import session from "@/store/session";
export default {
    methods: {
        login(){
            session.user = {
                name: 'Malcolm Miller',
                handle: 'Tiggy9000',
    
            }
            session.addNotification('Yay! You logged in', 'success')
            this.$router.push('feed')
        }
    }
}
</script> -->

<style>
    
</style>