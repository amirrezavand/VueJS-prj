<template>
  <div>
    <div>
      {{ user.value }}
    </div>
  <div>
    <a href="" @click.prevent="changeuser('Updated amir from child')">Change User</a>
  </div>
  </div>
</template>

<script>
export default {
    // props : ['user'],
    inject : ['user','changeuser']
}
</script>
