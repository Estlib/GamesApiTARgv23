<script>
export default {
    props: ['count'],
    data() { 
        return { 
            counter: this.count 
        } 
    }
    
}
</script>

<template>
    <div id="counter">
        Counter: {{ counter }}
    </div>
</template>
