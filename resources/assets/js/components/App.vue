<template>
    <div class="app">
        <el-container>
            <el-header> <Navbar/> </el-header>
            <el-container>
                <el-aside width="200px"> <Sidemenu/> </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'

    export default {
        data () {
            return { 
                visible: false 
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
    .el-header {
        padding: 0;
    }
</style>
