<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #59c944;
  background-color: #000000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border: 1px solid #59c944;
  color: #59c944;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #000;
  background-color: #59c944;
}

.button--green:last-child {
  margin-left: 15px;
}

.button--mini {
  display: inline-block;
  color: #59c944;
  padding: 10px 30px;
}
</style>
