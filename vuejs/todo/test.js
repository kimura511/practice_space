/*
 * runstant
 */

window.onload = function() {
  new Vue({
    title:'test',
    el: '#app',
    data: {
      input: '',
      todos: [
        { text: 'Please input text and enter comand.Add some todos' }
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


