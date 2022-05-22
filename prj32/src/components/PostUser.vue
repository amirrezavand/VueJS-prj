<template>
  <div>
    <div>
      {{ user.value }}
    </div>
  <div>
    <a href="" @click.prevent="changeuser">Change User</a>
  </div>
  </div>
</template>

<script>
export default {
    // props : ['user'],
    inject : ['user','changeuser']
}
</script>
