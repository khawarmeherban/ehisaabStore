<template>
  <div class="add-sub">
    <fa-icon @click="incrementCounter" class="inc-dec" :icon="['fas', 'plus-circle']"></fa-icon>
    <strong>{{ counter }}</strong>
    <fa-icon
      @click.prevent="decrementCounter"
       class="inc-dec"
      :icon="['fas', 'minus-circle']"
    ></fa-icon>
  </div>
</template>

<script>
export default {
  name: "incDec",

  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter: function() {
      this.counter += 1;
    },
    decrementCounter: function() {
      this.counter -= 1;
    }
  }
};
</script>

<style scoped>
.add-sub {
  display: flex;
}
.add-sub,
.inc-dec,
strong {
  color: #606060;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 5px;
}
.inc-dec:hover {
  cursor: pointer;
  opacity: 0.9;
}

p {
  margin-top: 2px;
}
</style>
