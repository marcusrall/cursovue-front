<template lang="html">
    <div class="col-md-4">
      <div class="thumbnail">
        <img src="https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png" alt="" />
        <div class="caption">
          <h3>{{ product.name }} </h3>
          <p>{{ product.price }}</p>
          <hr>
          <p>
            <a href="#" class="btn btn-default"> Wish list</a>
            <a href="#" class="btn btn-success">Comprar</a>
          </p>

        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style lang="css">
</style>
