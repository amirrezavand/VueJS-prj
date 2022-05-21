<template>
    <div>
        <select v-bind="$attrs">
            <option value="">Select</option>
            <option value="1">1</option>
        </select>
    </div>
    <div v-bind="$attrs">

    </div>
</template>

<script>

export default({
    inheritAttrs:false,
    data() {
        
    },
    mounted(){
        console.log(this.$attrs)
    }
})

</script>
