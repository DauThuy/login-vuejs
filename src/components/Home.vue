<template>
   <div>
       <h3 v-if="user">Hi, {{user.first_name}} {{user.last_name}}</h3>
       <h3 v-if="!user">Homepage, You are not logged in!</h3>
   </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Home',
        // props: [
        //     'user',
        // ],
        data() {
            return {
                user: null
            }
        },
        async created() {
            // const response = await axios.get('user', {
            //     headers: {
            //         Authorization: 'Bearer' + localStorage.getItem('token')
                    
                    
            //     }
            // });

            const response = await axios.get('user');
            this.user = response.data;
            // console.log(response);
        }
    }
</script>

<style>

</style>
