<template>
  <div>
    <button
      @click="$emit('event')"
      v-show="positive"
    >＋</button>
    <button
      @click="$emit('event')"
      v-show="!positive"
    >ー</button>
  </div>
</template>

<script>
export default {
  props: {
    positive: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
button {
  font-family: Helvetica Neue, sans-serif;

  background: #000;
  border-radius: 0px;
  border: 1px solid #59c944;
  color: #59c944;

  font-size: 2em;
  font-weight: 100;

  margin: 0;

  outline: none;
  padding: 5px 15px;

  transition: background 0.2s;

  &:hover,
  &:active,
  &:disabled {
    background: #59c944;
    cursor: pointer;
    color: #111;
  }
  &:active {
    outline: 2px solid #59c944;
  }
  &:focus {
    border: 1px solid #59c944;
  }
}
button:first-child {
  margin-right: 1rem;
}

button + button {
  margin-left: 3px;
}

div {
  display: inline-block;
}
</style>
