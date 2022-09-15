<template>
  <NuxtPage/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none !important;
    scroll-behavior: smooth;
  }
  :root {
    --secondary-color: #00276D;
    --primary-color: rgba(12, 21, 29);
  }
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  ::selection {
    color: #fff;
    background: #000;
  }

  ::-moz-selection {
    color: #fff;
    background: #000;
  }
</style>