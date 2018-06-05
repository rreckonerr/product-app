import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return [
      {
        id: 1,
        name: 'First Category'
      },
      {
        id: 2,
        name: 'Second Category'
      }
    ];
  },

  actions: {

    addNewCategory(id, name) {
      this.controller.get('model').pushObject({ id, name });
    },

    deleteCategory(category) {
      this.controller.get('model').removeObject(category);
    }

  }
});