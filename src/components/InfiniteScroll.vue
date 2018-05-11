<template>
  <div> 
     <h1>無限捲動</h1>
     {{pictures}}
     <pictureWall :pictures="pictures"/>
  </div>
</template>
<script>
import pictureWall from "@/components/picturesWall";
export default {
  data() {
    return {
      pictures: []
    };
  },
  components: {
    pictureWall
  },
  methods: {
    getPictures(response) {
      this.pictures = response.feed.data.map(item => {
        return item.full_picture;
      });
    }
  },
  mounted() {
    FB.init({
      appId: 187574835213400,
      version: "v3.0"
    });
    var pageAccessToken =
      "EAACqmStr9FgBACA2kjuUuqrSFMuG37xiTk5tfOHPVjqnzstn3OGv1LH907ZAb3c28rcZCtUKmpHaep3JccUu4cvF1q86cLsdj4BBWrcDegW4Evva5kov0DgWYdjezNVeRR5O3CXFfL34MgU4eYgGPSQOauWf9H2RKuqFK9VxqSGBIacZBruqvowFi9weUIeS0YXRTXZAowZDZD";
    FB.api(
      "/me/?fields=id,name,feed{full_picture}",
      { access_token: pageAccessToken },
      this.getPictures
    );
  }
};
</script>

