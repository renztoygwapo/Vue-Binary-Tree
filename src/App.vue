<template>
  <div id="app" class="main d-flex flex-column justify-content-around align-items-center">
    <label>
      Vertical
      <input type="checkbox" v-model="landscape" value="1" />
    </label>
    <div class="main-content d-flex align-items-center">
      <BinaryTree :json="data" :class="{landscape: landscape.length}" @click-node="clickNode" />
    </div>

    <footer class="main-footer bg-dark col-12 d-flex justify-content-center align-items-center">
      <p class="text-white">
        © 2020 Author
        Github
        <a
          href="https://github.com/mdiaz00147/Vue-Binary-Tree"
          target="_blank"
          class="text-warning"
        >Vue-Binary-Tree</a>
      </p>
    </footer>
  </div>
</template>

<script>
import BinaryTree from "@/components/BinaryTree";

export default {
  name: "app",
  components: {
    BinaryTree
  },
  data() {
    return {
      landscape: [],
      data: {
        name: "root",
        image_url: "https://static.refined-x.com/static/avatar.jpg",
        tooltip_placement: "top",
        tooltip_content: "title",
        children: [
          {
            name: "children1",
            image_url: "https://static.refined-x.com/static/avatar.jpg",
            tooltip_placement: "left",
            tooltip_content: "title"
          },
          {
            name: "children2",
            image_url: "https://static.refined-x.com/static/avatar.jpg",
            mate: {
              name: "mate",
              image_url: "https://static.refined-x.com/static/avatar.jpg",
              tooltip_placement: "top",
              tooltip_content: "<em>Tooltip</em> <u>with</u> <b>HTML</b>",
              tooltip_html: true
            },
            children: [
              {
                name: "grandchild",
                image_url: "https://static.refined-x.com/static/avatar.jpg",
                tooltip_placement: "bottom",
                tooltip_content: "<em>Tooltip</em> <u>with</u> <b>HTML</b>",
                tooltip_html: true
              },
              {
                name: "grandchild2",
                image_url: "https://static.refined-x.com/static/avatar.jpg"
              },
              {
                name: "grandchild3",
                image_url: "https://static.refined-x.com/static/avatar.jpg"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    clickNode: function(node) {
      // eslint-disable-next-line
      console.log(node);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  background: #e8ebee;
  min-height: 1000px;
}

.main {
  &-content {
    flex: 1;
  }

  &-footer {
    flex: 0.5;
  }
}
</style>