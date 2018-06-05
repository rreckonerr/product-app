import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('category');
  },

  actions: {

    addNewCategory(id, name) {
      this.store.createRecord('category', { id, name }).save();
    },

    deleteCategory(category) {
      category.destroyRecord();
    }

  }
});