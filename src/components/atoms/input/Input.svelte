<script lang="ts">
  export let name: string = "";
  export let width: string = "600px";
  export let height: string = "50px";
  export let value: string;
  export let type: string = "text";
  export let placeholder: string = "";
  export let bgColor: string = "#fff";
  export let textColor: string = "black";
  export let border: string = "1px solid var(--primary)";

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<input
  {name}
  use:typeAction
  bind:value
  style="width:{width};height:{height};background-color:{bgColor};color:{textColor};border:{border}"
  {placeholder}
/>

<style>
  input {
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
  }
</style>
