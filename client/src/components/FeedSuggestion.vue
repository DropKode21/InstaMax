<template>
    <article class="suggestionBox borderedBox">
        <div class="suggestionRow">
            <div class="suggestionHeader">SUGGESTIONS FOR YOU<a href="#">See All  <span style="color:#999">></span></a></div>
            <div class='suggestionContent' v-for="(user,idx) in userNames">
                <div class='suggestionPic'>
                    <a href='#'><img :src='profilePic(user)'></a>
                </div>
                <div class='suggestionNameContainer'>
                    <div class='nameBox'>
                        <div class='suggestionName'>
                            <a href='#'> {{ user }} </a>
                        </div>
                        <div class='suggestionFullName'>
                            <a href='#'> {{ userFullName[user].fullName }} </a></div>
                    </div>
                </div>
                <button :id='idx' class='fBtn followButton' @click='toggleFollow'>Follow</button>
            </div>
        </div>
    </article>
</template>
<script>

  export default {
    data() {
      return {
        userNames: Object.keys(this.$store.state.users).filter((user) => {
          return user !== this.$store.state.username;
        }),
        userFullName: this.$store.state.users,
      };
    },
    methods: {
      profilePic(user) {
        return '/img/' + user + '.jpg';
      },
      toggleFollow(e) {
        const btn = $('#' + e.srcElement.id);
        if (btn.text() === 'Follow') {
          btn.text('Followed');
        } else {
          btn.text('Follow');
        }
        btn.toggleClass('followButton');
        btn.toggleClass('followedButton');
      },
    },
  };

</script>
<style>

</style>
