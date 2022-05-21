<template>
  <div>
    <div>
      {{ user.value }}
    </div>
  </div>
</template>

<script>
export default {
    // props : ['user'],
    inject : ['user']
}
</script>
