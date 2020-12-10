<template>
  <div class="container">
    <Form
      v-slot="{ errors }"
      :validation-schema="schema"
      @submit="Submit_moveis"
    >
      <div class="form-group">
        <label for="input-title-ch">Title in Chinese</label>
        <Field
          id="input-title-ch"
          class="form-control"
          placeholder="金牌特務"
          name="title_ch"
          as="input"
          :class="{ 'is-invalid': errors.title_ch }"
        />
        <span>{{ errors.title_ch }}</span>
      </div>
      <div class="form-group">
        <label for="input-title-eng">Title in English</label>
        <Field
          id="input-title-eng"
          class="form-control"
          placeholder="Kingsman"
          name="title_en"
          as="input"
          :class="{ 'is-invalid': errors.title_en }"
        />
        <span>{{ errors.title_en }}</span>
      </div>
      <div class="form-group">
        <label for="input-intro">Intro</label>
        <Field
          id="input-intro"
          class="form-control"
          placeholder="是一部於2015年上映，由英國、美國合拍的諜報喜劇動作片..."
          type="text"
          name="movie_intro"
          as="input"
          :class="{ 'is-invalid': errors.title_en }"
        />
        <span>{{ errors.movie_intro }}</span>
      </div>
      <button type="submit" id="button-insert" class="btn btn-primary">
        Insert
      </button>
      <div v-if="!loading_movies" class="alert alert-danger" role="alert">
        資料尚未載入完畢
      </div>
    </Form>
    <hr />

    <div v-if="Movies.length < 1" class="alert alert-info" role="alert">
      載入中
    </div>
    <ul v-else id="list-movie" class="list-group">
      <li
        v-for="movie in Movies" 
        class="list-group-item"
        :key="movie.movie_id"
      >                 
        <h3>{{ movie.ch_name }}</h3>
        <h4>{{ movie.eng_name }}</h4>
        <div class="movie-intro text-left">
          <span v-html="movie.intro"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
  name: "Movies",
  components: {
    Field,
    Form
  },
  data() {
    let Movies = [];
    let loading_movies = true;
    const schema = Yup.object().shape({
      title_ch: Yup.string()
        .required("此欄位必填")
        .min(1, "至少需要 1 個字")
        .max(50, "最多只能 50 個字"),
      title_en: Yup.string()
        .required("此欄位必填")
        .min(10, "至少需要 10 個字")
        .max(100, "最多只能 100 個字")
        .matches(/^[\w\u4e00-\u9fa5\s",，:+]+$/gi, "不可使用標點符號"),
      movie_intro: Yup.string()
        .required("此欄位必填")
        .min(10, "至少需要 10 個字")
        .max(100, "最多只能 255 個字")
        .matches(/^Intro/, "需要以 Intro 作為開頭")
    });
    return {
      schema,
      Movies,
      loading_movies
    };
  },
  methods: {
    Submit_moveis({ title_ch, title_en, movie_intro }, { resetForm }) {
      const movies_length = this.Movies.length;
      if (movies_length < 1) {
        this.loading_movies = true;
        setTimeout(() => {
          this.loading_movies = false;
        }, 1000);
        return;
      }
      const new_movie = {
        ch_name: title_ch,
        eng_name: title_en,
        intro: movie_intro
      };
      this.Movies = [new_movie, ...this.Movies];
      resetForm();
    }
  },
  mounted() {
    this.axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://hw-web-api.herokuapp.com/api/movie/list.php"
      )
      .then(({ data }) => {
        this.Movies = { data }.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 12px;
}
</style>
