/*
 * runstant
 */

window.onload = function() {
  new Vue({
    el: '#app',
    data: {
      input: '',
      todos: [
        { text: 'Add some todos' }
      ]
    },
    methods: {
      add: function () {
        var text = this.input.trim()
        if (text) {
          this.todos.push({ text: text })
          this.input = ''
        }
      },
      remove: function (index) {
        this.todos.splice(index, 1)
      },
    }
  })
};


