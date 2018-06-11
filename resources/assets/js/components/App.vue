<template>
    <div class="app">
        <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element UI!</p>
        </el-dialog>
    </div>
</template>

<script>
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
