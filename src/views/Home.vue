<template>

<nav>

  <h1 class="subtitle">Exercise Submission Form</h1>
    <div>
      <img alt="Vue logo" src="../assets/workingOut.png" />
    </div>

    <div class="field">
      <label class="label">Body Part</label>
       <div class="control">
        <div class="select">
          <select v-model="bodypart">
            <option>Chest</option>
            <option>Biceps</option>
            <option>Triceps</option>
            <option>Legs</option>
            <option>Back</option>
            <option>Shoulders</option>
            <option>Abs</option>
            <option>Cardio</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Exercise</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">Sets</label>
      <div class="control">
        <div class="select">
          <select v-model="sets">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9+</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
     <label class="label">Reps</label>
      <div class="control">
        <div class="select">
          <select v-model="reps">
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
            <option>35+</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Duration of Exercise (minutes)</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">Additional Comments</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">Location (Optional)</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-link" @click="submitted()">Submit</button>
      </div>
    </div>
</nav>
</template>

<script>

//class="navbar" role="navigation" aria-label="main navigation"
//add this back to nav if there are errors ^

//import * as api from "@/Controller/Api";

export default {
  name: "Home",
  components: {
    
  },
  methods:{
    submitted(bodypart,sets,reps){
      alert('Your exercise information was submitted! '
      + ' bodypart ' + bodypart  + ' sets ' + sets + ' reps ' + reps);
    }
  }
  //methods: {
    //Exercise_Types: function () {
      //api.login(this.sets, this.reps).then(function (response) {
        //return response;
        //if (response.data) {
          //alert("# of sets was inputed");
        //} else {
          //alert("error");
        //}
      //});
    //},
  //}
};
</script>
