<template>
  <fieldset>
    <legend>Field description</legend>
    <label id="date-label" for="date">Current Date: </label>
    <input
      type="date"
      name="date"
      id="date"
      aria-labelledby="date-label date-instructions"
    />
    <p id="date-instructions">MM/DD/YYYY</p>
  </fieldset>
</template>
