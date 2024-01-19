<template>
  <v-app>
    <div class="container">
        <v-form v-model="valid" class="login">
            <h1>Sign In</h1>
            <v-text-field label="User Name:" type="email" counter="50" :rules="[required('name')]" />
            <v-text-field type="password" label="Password" counter="50" 
                :rules="[required('password'), minLength('password', 5)]" />
            <v-btn color="primary" :disabled="!valid">Submit</v-btn>
        </v-form>
    </div>
  </v-app>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            required(propertyType) {
                return v => 
                    (v && v.length > 0) || `You must input a ${propertyType}`
            },
            minLength(propertyType, minLength) {
                return v => (v && v.length >= minLength) ||
                   `${propertyType} must be less than ${minLength} characters.`
            }
        }
    }
};
</script>

<style lang="sass" scoped>
.container
    max-width: 1140px
    h1
      font-size: 50px
    .login
        display: flex
        flex-direction: column
        justify-content: center
        width: 50%
        margin: 40px auto
        h1
            text-align: center
            padding: 50px
        button
            width: 200px
            margin: 0 auto
            margin-top: 20px
</style>
